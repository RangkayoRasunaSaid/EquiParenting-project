/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        'main-color': '#675893',
        'light-main-color': '#776493',
        'dark-main-color': '#392c60',
      },
    },
  },
  plugins: [
  ],
};
