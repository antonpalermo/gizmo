// @ts-check
const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        dash: {
          0: {
            "stroke-dasharray": "1, 150",
            "stroke-dashoffset": "0"
          },
          50: {
            "stroke-dasharray": "90, 150",
            "stroke-dashoffset": "-35"
          },
          100: {
            "stroke-dasharray": "90, 150",
            "stroke-dashoffset": "-124"
          }
        }
      },
      animation: {
        loading: "dash 1.5s ease-in-out infinite"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};
