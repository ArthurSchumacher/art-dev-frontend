import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#f5f5f5",
            foreground: "#09090b",
            content1: "#262626",
            content2: "#404040",
            content3: "#d4d4d4",
            content4: "#e5e5e5",
            primary: {
              300: "#bd570f",
              400: "#fb923c",
              500: "#f97316",
              600: "#ea580c",
              DEFAULT: "#f97316",
            },
            secondary: {
              300: "#b5b257",
              DEFAULT: "#fffb7d",
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#171717",
            foreground: "#fafafa",
            content1: "#e5e5e5",
            content2: "#d4d4d4",
            content3: "#262626",
            content4: "#404040",
            primary: {
              400: "#a3e635",
              500: "#84cc16",
              600: "#65a30d",
              DEFAULT: "#84cc16",
            },
          },
        },
      },
    }),
  ],
};
export default config;
