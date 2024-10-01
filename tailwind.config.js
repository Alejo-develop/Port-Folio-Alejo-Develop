/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2ebedd",
        tertiary: "#3f2618", 
        'primary-transparent': '#2ebedd80',
        'tertiary-transparent': '#00000', 
        'white-transparent': '#ffffff20',
        cuarty: '#361326'
      },
    },
  },
  plugins: [],
};
