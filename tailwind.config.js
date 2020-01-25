module.exports = {
	important: true,
	theme: {
		fontFamily: {
			sans: [
				'Rubik',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
		},
		corePlugins: {
			fontStyle: false,
		},
		variants: {},
		extend: {
			colors: {
				primary: '#f66a6a',
			},
		},
	},
	variants: {
		opacity: ['responsive', 'hover'],
	},
};
