import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 8s linear infinite",
      },

      fontFamily: {
        poppin: ["Poppins"],
        inter: ["Inter"],
        kantu: ["Kantumruy"],
        noto: ["NotoSansKR"],
        halt: ["Halant"],
      },
    },
  },
  plugins: [],
});
