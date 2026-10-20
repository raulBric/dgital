import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// Paleta: negro y blanco del logo + azul cobalto como acento. El resto, neutros.
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        ink: "#0A0A0A",
        navy: "#0A1633",
        accent: {
          DEFAULT: "#1F4FE0",
          hover: "#1941BD",
          light: "#5B8CFF",
          soft: "#EEF2FD",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        aparecer: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        aparecer: "aparecer 0.5s ease-out both",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-links": "#1F4FE0",
            "--tw-prose-headings": "#0A0A0A",
            "--tw-prose-bold": "#0A0A0A",
            a: { textUnderlineOffset: "3px" },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
