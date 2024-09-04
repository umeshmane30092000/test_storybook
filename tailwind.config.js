/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}", // Include the src/stories folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

