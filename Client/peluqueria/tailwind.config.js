/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      blue: "#1fb6ff",
      background: "#141B1F",
      hero: "#215368",
    },
  },
  extend: {
    spacing: {
      "8xl": "96rem",
      "9xl": "128rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
  plugins: [],
};
