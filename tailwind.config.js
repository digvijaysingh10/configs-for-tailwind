import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        oswald: ['"Oswald"', "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.75rem", // 32px
        "4xl": "2rem", // 32px
        "5xl": "2.625rem", // 42px
        "6xl": "5rem", // 80px
        "7xl": "6rem", // 96px
        "8xl": "7.5rem", // 120px
        home: "92px",
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.025em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        none: "0.5",    // 8px
        tight: "0.75",  // 12px
        snug: "1",      // 16px
        normal: "1.25", // 20px
        relaxed: "1.3", // 20.8px
        loose: "1.5",   // 24px
        extraLoose: "2",    // 32px
        veryLoose: "3",     // 48px
        superLoose: "4",    // 64px
        maxLoose: "6",      // 96px
        
      },
      colors: {
        gray: {
          "1": "#F9FAFB",
          "2": "#F2F4F7",
          "3": "#D0D5DD",
          "4": "#98A2B3",
          "5": "#667085",
          "6": "#344054",
          "7": "#1D2939",
          "8": "#101828",
        },
        primary: {
          "1": "#F2F7FF",
          "2": "#E0ECFF",
          "3": "#C6DCFF",
          "4": "#ABCBFF",
          "5": "#7DAFFF",
          "6": "#4777C4",
          "7": "#2B518D",
          brand: "#142D55",
        },
        secondary: {
          "1": "#FFF8F5",
          "2": "#FFF5F1",
          "3": "#FFE7DF",
          "4": "#FFD0C1",
          "5": "#FFAE94",
          "6": "#FF875F",
          brand: "#FB6534",
          "8": "#FF3F00",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card1: "0px 0px 24px 0px #65656524",
        card2: "0px 0px 9px 0px #BEBEBE40",
        btnShadow: "0px 1px 2px 0px #E2E2E245",
        blur: "0px 0px 10px 0px #89898924",

        video:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      },
      borderRadius: {
        custom: "42px",
        "custom-sm": "32px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
