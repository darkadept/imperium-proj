const path = require('path');

module.exports = {
	development: {
		imperiumDevelopmentAliases: false,
	},
	production: {
		server: {
			devtool: 'source-map',
		},
		client: {
			devtool: 'source-map',
			rules: [
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: [{loader: 'style-loader!css-loader'}],
				},
			],
		},
	},
	web: {
		template: path.resolve(process.cwd(), './src/core/index.html'),
	},
};
