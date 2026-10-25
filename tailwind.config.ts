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
        brand: {
          dark: "#1d1f13",
          green: "#009065",
          clover: "#a9ed42",
          cloverLight: "#f0ffd1",
          cream: "#f7f8f5",
          border: "#eaf0dd",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        title: ["var(--font-grotesk)", "-apple-system", "sans-serif"],
        serif: ["var(--font-dm-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
