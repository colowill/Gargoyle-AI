/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'verdana-pro': ['"Verdana Pro Bold"', 'sans-serif'],
      },
    },
  },
  plugins: ['flowbite/plugin'],
}

