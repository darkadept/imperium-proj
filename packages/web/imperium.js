const path = require('path');

module.exports = {
	build: {
		server: {
			minimize: true,
			devtool: 'source-map',
		},
		client: {
			minimize: true,
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
