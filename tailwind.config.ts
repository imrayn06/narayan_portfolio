import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "var(--bg)",
          surface: "var(--surface-1)",
          surface2: "var(--surface-2)",
          border: "var(--border-subtle)",
          borderSubtle: "var(--border-line)",
        },
        warm: {
          white: "var(--text-primary)",
          offwhite: "var(--text-secondary)",
          gray: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          blue: "var(--accent-blue)",
          blueMuted: "var(--accent-blue-muted)",
          sand: "var(--accent-sand)",
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
