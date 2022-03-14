module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      hijau: "#49982D",
      merah: "#e00012",
      putih: "#FFFFFF",
      ligthgray: "#B2B2B2",
      gray: "#cccccc",
      bluelink: "#2F70FE",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Nunito", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "800px",
          },
          "@screen xl": {
            maxWidth: "1300px",
          },
        },
      });
    },
  ],
};
