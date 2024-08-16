/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sfProRounded: ["SF Pro Rounded", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-.15em",
      },
    },
  },
  plugins: [],
};
