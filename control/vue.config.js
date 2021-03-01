const path = require('path')

module.exports = {
	outputDir: path.resolve(__dirname, '../server/panel'),
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:5000',
			},
		},
	},
}
