/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        red: "#e60013",
        crimson: "#ff2638",
        gainsboro: "#e1e1e1",
        black: "#000",
        gray: "#1e1e1e",
        darkslategray: "#343631",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "roboto-mono": "'Roboto Mono'",
      },
      borderRadius: {
        "1001xl": "1020px",
        lg: "18px",
        "31xl": "50px",
        xl: "20px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "5xl": "24px",
      lgi: "19px",
      "11xl": "30px",
      "51xl": "70px",
      "37xl": "56px",
      "23xl": "42px",
      "16xl": "35px",
      "2xl": "21px",
      lg: "18px",
      "26xl": "45px",
      "17xl": "36px",
      "8xl": "27px",
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      "7xl": "26px",
      sm: "14px",
      "61xl": "80px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
