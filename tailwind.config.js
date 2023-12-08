/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
		colors: {
			primary: '#ba68c8',
			secondary: '#171717'
		}
	},
	fontFamily: {
		sans: ['Montserrat', 'sans-serif'],
	}
  },
  plugins: [require("@tailwindcss/forms")],
}