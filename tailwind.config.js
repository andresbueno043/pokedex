/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "30": "37.5px",
        "140": "175px",
        "200": "250px",
      }
    },
  },
  plugins: [],
};
