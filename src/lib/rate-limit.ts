import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Límites de la demo: 5 usos por IP al día y 300 en total al día.
export const LIMITE_POR_IP = 5;
export const LIMITE_GLOBAL = 300;

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

const porIp = redis
  ? new Ratelimit({ redis, prefix: "demo:ip", limiter: Ratelimit.fixedWindow(LIMITE_POR_IP, "1 d") })
  : null;
const global = redis
  ? new Ratelimit({ redis, prefix: "demo:global", limiter: Ratelimit.fixedWindow(LIMITE_GLOBAL, "1 d") })
  : null;

// Fallback en memoria (solo dura lo que viva la instancia del servidor; vale para desarrollo).
const memoria = new Map<string, number>();

const hoy = () => new Date().toISOString().slice(0, 10);

function consumirEnMemoria(clave: string, limite: number) {
  const k = `${hoy()}:${clave}`;
  const usados = memoria.get(k) ?? 0;
  if (usados >= limite) return false;
  memoria.set(k, usados + 1);
  if (memoria.size > 10_000) memoria.clear();
  return true;
}

/** Devuelve true si la petición puede usar la demo. `idCliente` es un hash de la IP. */
export async function consumirUsoDemo(idCliente: string): Promise<boolean> {
  if (porIp && global) {
    const { success } = await porIp.limit(idCliente);
    if (!success) return false;
    return (await global.limit("total")).success;
  }
  if (!consumirEnMemoria(`ip:${idCliente}`, LIMITE_POR_IP)) return false;
  return consumirEnMemoria("global", LIMITE_GLOBAL);
}

/** Métricas: solo cuenta usos por tipo detectado. Nunca guarda el contenido del correo. */
export async function registrarTipo(tipo: string) {
  const clave = `demo:metricas:${hoy()}`;
  if (redis) {
    await redis.hincrby(clave, tipo, 1);
    await redis.expire(clave, 60 * 60 * 24 * 90);
  } else {
    memoria.set(`${clave}:${tipo}`, (memoria.get(`${clave}:${tipo}`) ?? 0) + 1);
  }
}
