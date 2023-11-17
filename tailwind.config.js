/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["'League Spartan'", "sans-serif"],
    },
    spacing: {
      0.2: "2px",
      0.4: "4px",
      0.8: "8px",
      1.2: "12px",
      1.6: "16px",
      2.4: "24px",
      3.2: "32px",
      4.8: "48px",
      6.4: "64px",
      8: "80px",
      9.6: "96px",
      12.8: "128px",
    },
    fontSize: {
      1: "10px",
      1.2: "12px",
      1.4: "14px",
      1.6: "16px",
      1.8: "18px",
      2: "20px",
      2.4: "24px",
      3: "30px",
      3.6: "36px",
      4.4: "44px",
      5.2: "52px",
      6.2: "62px",
      7.4: "74px",
      8.6: "86px",
      9.8: "98px",
    },
    colors: {
      desaturatedDarkCyan: "hsl(180, 29%, 50%)",
      lightGrayishCyan: "hsl(180, 52%, 96%)",
      darkGrayishCyan: "hsl(180, 8%, 52%)",
      veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
    },
    extend: {
      boxShadow: {
        card: "inset 5px 0 hsl(180, 29%, 50%),0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
}
