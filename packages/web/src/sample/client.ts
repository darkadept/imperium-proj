import loadable from '@loadable/component';
// These were the static routes
// import HelloWorld from './client/HelloWorld';

// These are the dynamic routes
const HelloWorld = loadable(() => import('./client/components/HelloWorld'));
const GraphqlTest = loadable(() => import('./client/components/GraphqlTest'));

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
		statusbar: [
			{
				component: () => 'Hello World',
				permissions: ['administrator', 'workstation'],
				priority: 2,
				contextType: ['user', 'client'],
			},
		],
		menu: [
			{
				component: () => 'Hello World',
				permissions: ['administrator', 'workstation'],
				priority: 2,
				contextType: ['user', 'client'],
			},
		],
		sideMenu: [{}],
		footer: [{}],
	};
}
