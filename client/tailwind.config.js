module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'insta-green': 'rgb(85, 195, 61)',
			},
		},
	},
	variants: {
		outline: ['focus'],
		// backgroundColor: ['active'],
		extend: {
			textColor: ['group-focus'],
			borderColor: ['group-focus'],
		},
	},
	plugins: [],
	corePlugins: {
		outline: false,
	},
}
