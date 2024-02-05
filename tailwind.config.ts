import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        supernova: {
          50: "rgb(var(--supernova-50) / <alpha-value>)",
          100: "rgb(var(--supernova-100) / <alpha-value>)",
          200: "rgb(var(--supernova-200) / <alpha-value>)",
          300: "rgb(var(--supernova-300) / <alpha-value>)",
          400: "rgb(var(--supernova-400) / <alpha-value>)",
          500: "rgb(var(--supernova-500) / <alpha-value>)",
          600: "rgb(var(--supernova-600) / <alpha-value>)",
          700: "rgb(var(--supernova-700) / <alpha-value>)",
          800: "rgb(var(--supernova-800) / <alpha-value>)",
          900: "rgb(var(--supernova-900) / <alpha-value>)",
        },
      },
      fontFamily: {
        cinzel: ["cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
