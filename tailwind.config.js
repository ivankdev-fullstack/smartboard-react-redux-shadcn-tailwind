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
          white: "hsl(var(--white))",
          black: "hsl(var(--primary-black))",
          red: "hsl(var(--primary-red))",
          gray: {
            DEFAULT: "hsl(var(--primary-gray))",
            light: "hsl(var(--primary-gray-light))",
          },
          pink: {
            DEFAULT: "hsl(var(--primary-pink))",
            light: "hsl(var(--primary-pink-light))",
          },
          purple: {
            DEFAULT: "hsl(var(--primary-purple))",
            light: "hsl(var(--primary-purple-light))",
          },
          blue: {
            DEFAULT: "hsl(var(--primary-blue))",
            light: "hsl(var(--primary-blue-light))",
          },
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          dark: "hsl(var(--border-dark))",
        },
        column: {
          line: "hsl(var(--column-line))",
          fg: "hsl(var(--column-fg))",
          bg: "hsl(var(--column-bg))",
          status: {
            1: "hsl(var(--column-status-1))",
            2: "hsl(var(--column-status-2))",
            3: "hsl(var(--column-status-3))",
            4: "hsl(var(--column-status-4))",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
