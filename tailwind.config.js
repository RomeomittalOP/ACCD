/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040E1F",
          900: "#071B34",
          800: "#0A2547",
          700: "#0E3464",
        },
        royal: {
          500: "#0057FF",
          600: "#0047D6",
          400: "#3B7AFF",
        },
        sky: {
          400: "#38BDF8",
          300: "#7DD3FC",
        },
        silver: {
          400: "#C0C7D1",
          300: "#D8DEE7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.35)",
        "glow-lg": "0 0 80px rgba(0, 87, 255, 0.45)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        drift: "drift 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%": { transform: "translateX(-10%) translateY(0)" },
          "100%": { transform: "translateX(110%) translateY(-30px)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(0,87,255,0.25), transparent 70%)",
      },
    },
  },
  plugins: [],
};
