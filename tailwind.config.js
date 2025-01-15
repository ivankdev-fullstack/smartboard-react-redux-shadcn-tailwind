/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        section: {
          background: "hsl(var(--section-background))",
        },
        primary: {
          black: "hsl(var(--primary-black))",
          blue: {
            DEFAULT: "hsl(var(--primary-blue))",
            light: "hsl(var(--primary-blue-light))",
          },
          white: "hsl(var(--white))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          dark: "hsl(var(--border-dark))",
        },
        input: "hsl(var(--input))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
