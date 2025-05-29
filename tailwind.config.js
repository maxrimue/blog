/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    // Add other paths if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Use your custom font as the default
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...other plugins...
  ],
};
