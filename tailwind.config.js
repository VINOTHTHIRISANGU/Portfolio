/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#0f1424",
          700: "#161c31",
          600: "#1e2740",
        },
        mist: {
          400: "#94a3b8",
          300: "#b4c0d3",
          200: "#dbe2ee",
          100: "#eef1f7",
        },
        azure: {
          500: "#3b82f6",
          400: "#5b9dff",
          300: "#8ab6ff",
        },
        violet: {
          500: "#8b5cf6",
          400: "#a479ff",
          600: "#7440e0",
        },
        cyan: {
          400: "#22d3ee",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        "grad-radial-hero":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139,92,246,0.45)",
        "glow-blue": "0 0 40px -8px rgba(59,130,246,0.45)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
