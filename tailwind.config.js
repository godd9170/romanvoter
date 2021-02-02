module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      outline: {
        green: "2px solid rgba(5, 150, 105, 1)",
        red: "2px solid rgba(220, 38, 38, 1)",
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
  },
  plugins: [],
}
