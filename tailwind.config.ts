
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brandGreen: "#375D2A",
        brandOrange: "#F2791C",
        brandBlack: "#3A3A3A",
        brandWhite: "#FFFFFF",
        brandGray: "#F6F6F6",
      },
      boxShadow: {
        card: "0 4px 24px 0 rgba(55,93,42,0.05)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(.39,.575,.565,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
