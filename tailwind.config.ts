import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      positive: "var(--positive)",
      negative: "var(--negative)",
      neutral: "var(--neutral)",
    },
  },
  plugins: [],
} satisfies Config;
