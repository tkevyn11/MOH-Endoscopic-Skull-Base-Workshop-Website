import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa", // teal-50
          100: "#ccfbf1", // teal-100
          200: "#99f6e4", // teal-200
          300: "#5eead4", // teal-300
          400: "#2dd4bf", // teal-400
          500: "#14b8a6", // teal-500 (Primary Action)
          600: "#0d9488", // teal-600
          700: "#0f766e", // teal-700
          800: "#115e59", // teal-800
          900: "#134e4a", // teal-900 (Deep Surgical Green)
          950: "#0B1F2A", // Dark surgical blue (--bg)
        },
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          light: "rgba(255, 255, 255, 0.08)",
          border: "rgba(255, 255, 255, 0.10)",
        },
        accent: {
          DEFAULT: "#0B6B5C",
          dark: "#0F5B4F",
          light: "#14b8a6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;