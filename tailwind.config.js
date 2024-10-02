/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2ebedd",
        secondary: '#ff7d1f',
        tertiary: "#3f2618", 
        'primary-transparent': '#2ebedd80',
        'tertiary-transparent': '#00000', 
        'white-transparent': '#ffffff20',
        cuaternary: '#361326'
      },
    },
  },
  plugins: [],
};
