import type { MDXComponents } from "mdx/types";
import { FlujoDiagrama, Frase, Herramientas, PasosSolucion, Resultados } from "@/components/casos";

// Componentes disponibles en los artículos .mdx sin necesidad de importarlos.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components, Resultados, FlujoDiagrama, PasosSolucion, Herramientas, Frase };
}
