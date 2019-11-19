module.exports = {
	development: {
		imperiumDevelopmentAliases: false,
	},
	production: {
		client: {
			devtool: 'source-map',
		},
	},
	source: {
		clientIndex: './core/client.tsx',
	},
};
