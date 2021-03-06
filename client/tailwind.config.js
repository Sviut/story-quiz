module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.vue',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'insta-green': 'rgb(85, 195, 61)',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},
	plugins: [],
	corePlugins: {
		outline: false,
	},
}
