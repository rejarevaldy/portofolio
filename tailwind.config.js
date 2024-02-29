const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#1f202f",
          100: "#0a0a0c",
        },
        secondary: {
          300: "#f8f9ff",
          200: "#a2a3a5",
          100: "#646566",
        },
        accent: "#708af4",
      },
      keyframes: {
        blink: {
          "50%": { visibility: "hidden" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["lucide"]),
    }),
  ],
};
