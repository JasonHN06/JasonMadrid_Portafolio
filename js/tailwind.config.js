tailwind.config = {
  theme: {
    extend: {
      colors: {
        "color-backone": "#080c1a",
        "color-primary": "#ffffff",
        "color-btn": "#f5f5f5",
        "color-hover": "#86D2D5",
        "color-border": "#161829",
        "color-backtwo": "#5b3b68",
      },
      keyframes: {
        jiggle: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "50%": { transform: "translateX(4px)" },
          "75%": { transform: "translateX(-2px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        jiggle: "jiggle 0.4s ease-in-out",
      },
      fontFamily: {
        courier: ["Courier New", "Courier", "monospace"],
      },
    },
  },
};
