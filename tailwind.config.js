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
        "brand-white-darker": "#717171",

        "brand-pink": "#DEC0BA",
        "brand-black-lighter": "#3F3F3F",
        "brand-black-light": "#1E1E1E",
        "brand-yellow": "#E8D52F",
      },
      boxShadow: {
        "brand-pink": "0px 3px 10px 2px #DEC0BA4D",
      },
      fontFamily: {
        inter: "var(--inter-sans)",
        lato: "var(--lato-sans)",
      },
      transitionProperty: {
        size: {
          "transition-property": "height",
          "transition-timing-function": "linear",
          "transition-duration": "300ms",
        },
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },

        vanish: {
          "100%": {
            display: 'none',
            opacity: 0,
          },
        },

        "apply-opacity": {
          "0%, 90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        "apply-opacity": "apply-opacity 0ms 300ms linear",
        "vanish-delay": "vanish 10ms 300ms linear 1 normal both",
      },
    },
  },
  plugins: [],
};
