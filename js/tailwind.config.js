tailwind.config = {
  theme: {
    extend: {
      colors: {
        "color-backone": "#080c1a",
        "color-primary": "#ffffff",
        "color-btn": "#3d2e51",
        "color-hover": "#26223c",
        "color-border": "#161829",
        "color-backtwo": "#5b3b68",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
};
