/**
 * Omni2 Design System — Tailwind mapping (default: omni2 theme, dark-first).
 * Brand: teal accent (#1fd1c4) + orange CTA (#ff6a2c) on near-black surfaces,
 * with a warm-paper light mode. Fonts: Rubik (display), Hanken Grotesk (body),
 * IBM Plex Mono (technical labels).
 */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // brand accents
        teal: "#1fd1c4",
        cyan: "#57e3d7",
        orange: "#ff6a2c",
        primary: {
          50: "#effefb",
          100: "#d4f7f2",
          200: "#a9efe6",
          300: "#6fe2d5",
          400: "#3ad8c8",
          500: "#1fd1c4",
          600: "#17a89e",
          700: "#2fa196",
          800: "#125c56",
          900: "#0a2e2b",
        },
        accent: {
          100: "#ffe0d0",
          300: "#ffab85",
          400: "#ff8654",
          500: "#ff6a2c",
          600: "#f58628",
          700: "#d1521a",
        },
        neutral: {
          0: "#ffffff",
          50: "#fbfaf6",
          100: "#f4f2ec",
          200: "#ece9e1",
          300: "#c9ccca",
          400: "#8c8e86",
          500: "#5c676d",
          600: "#565a5b",
          700: "#2b3238",
          800: "#161b20",
          850: "#101418",
          900: "#0b0e11",
          950: "#080a0c",
          1000: "#000000",
        },
        // dark-first semantic surfaces (omni2 theme defaults)
        bg: {
          DEFAULT: "#080a0c",
          2: "#0b0e11",
        },
        surface: {
          DEFAULT: "#101418",
          2: "#161b20",
        },
        background: {
          default: "#080a0c",
          subtle: "#0b0e11",
          surface: "#101418",
          inverse: "#f4f2ec",
        },
        text: {
          primary: "#eef3f2",
          secondary: "#9aa6ac",
          muted: "#5c676d",
          inverse: "#17191b",
          brand: "#1fd1c4",
          accent: "#ff6a2c",
        },
        border: {
          default: "rgba(233,245,243,0.09)",
          strong: "rgba(233,245,243,0.18)",
          focus: "#1fd1c4",
        },
      },
      fontFamily: {
        display: ["Rubik", "system-ui", "sans-serif"],
        sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "999px",
      },
      spacing: {
        18: "72px",
        22: "88px",
        26: "104px",
        30: "120px",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
