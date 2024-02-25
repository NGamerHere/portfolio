import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: {
    extend: {
      backgroundImage: { "gradient-conic": string; "gradient-radial": string };
      fontSize: { tiny: string; huge: string }
    }
  };
  content: string[]
} = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'tiny': '0.625rem',  // Equivalent to 10px
        'huge': '5rem',       // Equivalent to 80px
      }
    },
  },
  plugins: [],
};
export default config;
