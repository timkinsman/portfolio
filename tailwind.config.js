/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        /* fallback for Opera, IE and etc. */
        screen: ['100vh', '100dvh'],
      },
    },
  },
  plugins: [],
};
