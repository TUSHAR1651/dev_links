/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  safelist: [
    "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black",
    "bg-red-300",
    "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900",
    "bg-gradient-to-r from-green-300 to-purple-400",
  ],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          500: "#4263eb",
          600: "#3b5bdb",
          // 100: "#FFF1E6",
          // 100: "#FFF1E6",
        },
        dark: {
          // 100: "#000000",
          // 200: "#0F1117",
          // 300: "#151821",
          // 400: "#212734",
          // 500: "#101012",
        },
        light: {
          900: "#F3F3F1",
          800: "#495057",
          // 900: "#FFFFFF",
          // 800: "#F4F6F8",
          // 850: "#FDFDFD",
          // 700: "#DCE3F1",
          // 500: "#7B8EC8",
          // 400: "#858EAD",
        },
        "accent-blue": "#1DA1F2",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
    },
  },
};
