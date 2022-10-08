/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        darkBlue: "hsl(212, 21%, 14%)",
        grayishBlue: "hsl(228, 12%, 48%)",
      },
      backgroundImage: {
        "mobile-image": "url('./images/image-product-mobile.jpg')",
        "destktop-image": "url('./images/image-product-desktop.jpg')",
      },
      fontFamily: {
        Fraunces: "Fraunces, serif",
        Montserrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
