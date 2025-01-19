import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    colors: {
      black: "var(--black)",
      white: "var(--white)",

      background: "var(--background)",
      foreground: "var(--foreground)",

      muted: "var(--muted)",
      subtle: "var(--subtle)",

      positive: "var(--positive)",
      negative: "var(--negative)",
      neutral: "var(--neutral)",
    },
  },
  plugins: [],
} satisfies Config;
