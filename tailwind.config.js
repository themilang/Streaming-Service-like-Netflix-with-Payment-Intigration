/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
				fade: 'fadeIn .5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 0.3 },
          to: { opacity: 0.5 },
          to: { opacity: 0.7 },
          to: { opacity: 0.9 },
          to: { opacity: 1 },

				},
			},
      
		
    },
  },
  plugins: [],
}