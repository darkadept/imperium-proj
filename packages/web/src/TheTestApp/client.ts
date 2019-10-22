import routes from './routes';

export default function TheTestApp() {
	return {
		// Required
		name: 'TheTestApp', // [String] Name of the module

		// Core
		// initialState: () => {}, // [Function]
		// startup: () => ({myRootRenderProp: 'value'}), // [Function]
		routes, // [Array of Route Objects]
		// hocs: [() => {}], // [Array of Functions]

		// Graphql
		// fragments: null,
	};
}
