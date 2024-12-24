import type { Config } from "tailwindcss";
import daisyui from "daisyui"
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f6f4",
        card : "#f0f0f0",
        tBlack: "#404742",
        tGreen: "#1fa84f",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
