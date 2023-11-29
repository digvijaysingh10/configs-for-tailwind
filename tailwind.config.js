/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem", // Default padding for all screen sizes
        sm: "1rem",      // Padding for small screens
        md: "2rem",      // Padding for medium screens
        lg: "3rem",      // Padding for large screens
        xl: "4rem",      // Padding for extra-large screens
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        "2xl": "1440px",
        xl: "1024px",
        lg: "768px",
        md: "425px",
        sm: "375px",
        xs: "320px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
