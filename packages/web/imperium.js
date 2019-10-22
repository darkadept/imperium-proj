// eslint-disable-next-line @typescript-eslint/no-var-requires
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
		},
	},
	web: {
		template: path.resolve(process.cwd(), './src/core/index.html'),
	},
};
