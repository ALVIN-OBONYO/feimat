/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		fontFamily: {
			roboto: ['roboto', 'ui-sans-serif', 'system-ui'],
			spectral: ['spectral', 'san-serif'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000000',
			white: '#FFFFFF',
			primary: '#800080',
			secondary: '#ad5b6d',
			purple: '#800080',
			gold: '#D5A848',
			grey: '#1F1F1F',
			darkgrey: '#444242',
			lilac: '#E6CCE6',
		},
		screens: {
			sm: '512px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			// backgroundImage: theme => ({
			// 	'pattern': "url('aasets/images/home.jpg')",
			//    }),
			colors: {
				neutral: '#000000',
				primary: {
					100: '#800080',
					200: '#800080',
					300: '#800080',
					400: '#800080',
					500: '#800080',
					600: '#800080',
				},
			},
			spacing: {
				'25vh': '25vh',
				'30vh': '30vh',
				'50vh': '50vh',
				'60vh': '60vh',
				'75vh': '75vh',
				'90vh': '90vh',
				'40px': '40px',
				'90px': '90px',
				'80px': '80px',
				'100px': '100px',
				'1000px': '-100px',
				'20px': '20px',
				'10px': '10px',
				'400px': '400px',
				'138px': '-138px',
				'300px': '-300px',
			},
			width: {
				'80%': '80%',
				'90%': '90%',
				'60%': '60%',
			},
		},
	},
	plugins: [],
};