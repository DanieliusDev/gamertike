/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.tsx'],
	theme: {
		extend: {
			animation: {
				'border-pulse': 'border-pulse .8s ease-in-out infinite',
			},
			keyframes: {
				'border-pulse': {
					'50%': {
						'border-color': 'transparent',
					},
				},
			},
		},
	},
};
