import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-backgroundPrimary)",
        backgroundPrimary: "var(--color-backgroundPrimary",
        backgroundSecondary: "var(--color-backgroundSecondary)",
        primary: "var(--color-primary)",
        primaryLight: "var(--color-primaryLight)",
        secondary: "var(--color-secondary)",
        secondaryLight: "var(--color-secondaryLight)",
        tertiary: "var(--color-tertiary)",
        tertiaryLight: "var(--color-tertiaryLight)",
        light: "var(--color-light)",
        white: "var(--color-light)",
        error: "var(--color-error)",
      },
      width: {
        appLg: "1200px",
        app: "90%",
      },
      screens: {
        desktop: "1280px",
        laptop: "769px",
        tablet: "481px",
      },
      fontFamily: {
        pacifico: "var(--font-pacifico)",
        sans: "var(--font-sans)",
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
