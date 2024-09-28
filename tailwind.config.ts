import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          "main_background" : "var(--bg-main)",
          "keypad_background" : "var(--bg-keypad)",
          "screen_background" : "var(--bg-screen)",
          "key_background" : "var(--key-back)",
          "key_shadow" : "var(--key-shadow)",
          "key-equal-btn" : "var(--key-equal-btn)",
          "key-equal-btn-shadow" : "var(--key-equal-btn-shadow)",
          "key-active-back" : "var(--key-active-back)",
          "key-active-shadow" : "var(--key-active-shadow)",
          "text" : "var(--text)",
          "text-equal" : "var(--text-equal)",
      },
      fontFamily : {
        LeagueSpartan : ["LeagueSpartan"]
      }
    },
  },
  plugins: [],
};
export default config;
