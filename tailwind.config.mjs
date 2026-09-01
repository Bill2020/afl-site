/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a0f1e",
        cyan: "#00d4ff",
        blue: "#2D6EFF",
        white: "#ffffff",
      },
    },
  },
};
