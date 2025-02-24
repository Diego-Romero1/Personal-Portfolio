// tailwind.config.js
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [flowbite.plugin()],
};
