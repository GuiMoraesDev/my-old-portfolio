/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-white-dark": "#FBFBFB",
        "brand-pink": "#DEC0BA",
        "brand-black-lighter": "#3F3F3F",
        "brand-black-light": "#1E1E1E",
      },
      boxShadow: {
        "brand-pink": "0px 3px 10px 2px #DEC0BA4D",
      },
      fontFamily: {
        inter: "var(--inter-sans)",
        lato: "var(--lato-sans)",
      },
    },
  },
  plugins: [],
};
