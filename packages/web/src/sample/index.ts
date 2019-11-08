import loadable from '@loadable/component';
// These were the static routes
// import HelloWorld from './client/HelloWorld';

// These are the dynamic routes
const HelloWorld = loadable(() => import('./components/HelloWorld'));
const GraphqlTest = loadable(() => import('./components/GraphqlTest'));

export default function() {
	return {
		name: 'Sample',
		routes: [
			{
				path: '/sample',
				content: HelloWorld,
			},
			{
				path: '/graphqltest',
				content: GraphqlTest,
			},
		],
	};
}
