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
};
