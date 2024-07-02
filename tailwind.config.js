// @ts-check

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "border-pulse": "border-pulse .8s ease-in-out infinite",
      },
      keyframes: {
        "border-pulse": {
          "50%": {
            "border-color": "transparent",
          },
        },
      },
    },
  },
};
