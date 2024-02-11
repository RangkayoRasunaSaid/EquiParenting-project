/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "main-color": "#675893",
        "light-main-color": "#776493",
        "dark-main-color": "#392c60",
      },
      colors: {
        ungu1: "#675893",
        ungu2: "#E8DEF7",
        primary: "#675893",
        secondary: "#E8DEF7",
        tertiery: "#7f508f",
      },
      fontSize: {
        xxs: "0.65rem",
      },
      backgroundColor: {
        'main-color': '#675893',
        'light-main-color': '#776493',
        'dark-main-color': '#392c60',
      },
      colorsOrigin: {
        "primary": "#675893",
        "secondary": "#E8DEF7",
        "tertiery": "#7f508f",
      },
      fontWeight: ["hover", "focus", "active", "group-hover"],
    },

    // container: {
    //   center: true,
    //   padding: {
    //     default: "20px",
    //     md: "40px",
    //   }
    // },
  },
  plugins: [],
};
