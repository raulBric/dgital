import { avisoPendiente, type PaginaLegal as Pagina } from "@/content/legal";

export default function PaginaLegal({ pagina }: { pagina: Pagina }) {
  return (
    <article className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">{pagina.titulo}</h1>
        <p className="mt-6 rounded-lg border border-dashed border-neutral-400 bg-neutral-50 p-4 text-sm font-medium text-neutral-700">
          {avisoPendiente}
        </p>
        <div className="prose prose-neutral mt-10 max-w-none">
          {pagina.secciones.map((s) => (
            <section key={s.titulo}>
              <h2>{s.titulo}</h2>
              {s.parrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
