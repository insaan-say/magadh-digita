import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./animations/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#f8fafc",
        muted: "#9ca3af",
        border: "rgba(255,255,255,0.12)",
        electric: "#23d5ff",
        orange: "#ff5a1f",
        violet: "#8b5cf6",
        ink: "#050505"
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,90,31,0.22), 0 0 80px rgba(35,213,255,0.14)",
        "blue-glow": "0 0 50px rgba(35,213,255,0.28)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 50% 0%, rgba(35,213,255,0.12), transparent 32%), radial-gradient(circle at 82% 20%, rgba(255,90,31,0.14), transparent 28%), radial-gradient(circle at 20% 80%, rgba(139,92,246,0.16), transparent 26%)"
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate3d(-2%, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(2%, -2%, 0) rotate(1deg)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        }
      },
      animation: {
        aurora: "aurora 11s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        scanline: "scanline 6s linear infinite"
      }
    }
  },
  plugins: [typography]
};

export default config;
