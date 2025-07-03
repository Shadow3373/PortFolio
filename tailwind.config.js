// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
        custom: ['"Manufacturing Consent"'],
      },
    },
  },
  plugins: [],
};