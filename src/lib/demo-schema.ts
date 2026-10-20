import { z } from "zod";
import { MAX_CARACTERES, MIN_CARACTERES } from "@/content/demo";

export const DemoEntradaSchema = z.object({
  texto: z.string().trim().min(MIN_CARACTERES).max(MAX_CARACTERES),
});

export const DemoResultadoSchema = z.object({
  tipo: z.enum(["presupuesto", "queja", "factura", "lead", "otro"]),
  prioridad: z.enum(["alta", "media", "baja"]),
  departamento: z.string(),
  resumen: z.string(),
  datos: z.array(z.object({ campo: z.string(), valor: z.string() })),
  accion: z.object({ titulo: z.string(), contenido: z.string() }),
});

export type DemoResultado = z.infer<typeof DemoResultadoSchema>;

export type DemoRespuesta =
  | { ok: true; resultado: DemoResultado }
  | { ok: false; error: "validacion" | "limite" | "servicio" };
