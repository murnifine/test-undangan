import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./template/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Shadows: ["Shadows Into Light", "cursive"],
        Rajdhani: ["Rajdhani", "cursive"],
        Rouge: ["Rouge Script", "cursive"],
        Sacramento: ["Sacramento", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
        GlassAntiqu: ["Glass Antiqua", "cursive"],
      },
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export default config;
