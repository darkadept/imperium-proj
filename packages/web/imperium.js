const path = require('path');

module.exports = {
	build: {
		server: {
			minimize: false,
			devtool: 'source-map',
		},
		client: {
			devtool: 'source-map',
		},
	}
};
