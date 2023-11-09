/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F5EFE7",
      },
      animation: {
        illustrationBounce: "illustrationBounce 2s ease-in-out forwards",
      },
      keyframes: {
        illustrationBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
