import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        dashboard: "auto repeat(1, minmax(100px, 1fr))",
      },
      gridTemplateCols: {
        // Complex site-specific row configuration
        dashboard: "repeat(2, minmax(100px, 1fr))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
