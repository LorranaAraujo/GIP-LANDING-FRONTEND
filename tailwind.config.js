/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EDF8FD",
          100: "#DBEDF5",
          200: "#B2DAED",
          300: "#86C7E5",
          400: "#66B6DF",
          500: "#3992C2",
          600: "#15719A",
          700: "#0E4F6C",
          800: "#003F5B",
          900: "#063246",
        },
        emphasis: "#18181B", // Zinc/900
        default: "#52525B", // Zinc/600
        muted: "#A1A1AA",   // Zinc/400
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        sans: ["Figtree", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};