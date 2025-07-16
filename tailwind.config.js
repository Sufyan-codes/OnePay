/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: '#1F4BC5',
          accent: '#FCD34D',
          darkPurple: '#2C0F44',
          softPurple: '#EDE9F6',
          lightYellow: '#FFF9EC',
          textDark: '#1A1A1A',
        },
        fontFamily: {
          sans: ['"Inter"', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}

