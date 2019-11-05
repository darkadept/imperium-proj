import loadable from '@loadable/component';
// These were the static routes
// import HelloWorld from './client/components/HelloWorld';

// These are the dynamic routes
const HelloWorld = loadable(() => import('./client/components/HelloWorld'));

export default function() {
	return {
		name: 'Client',
		routes: [
			{
				path: '/client',
				content: HelloWorld,
			},
		],
		// startup(imperiumClient) {
		// 	return {test: 'test'};
		// },
		// statusbar: [
		// 	{
		// 		component: () => 'Hello World',
		// 		permissions: ['administrator', 'workstation'],
		// 		priority: 2,
		// 		contextType: ['user', 'client'],
		// 	},
		// ],
		// menu: [
		// 	{
		// 		component: () => 'Hello World',
		// 		permissions: ['administrator', 'workstation'],
		// 		priority: 2,
		// 		contextType: ['user', 'client'],
		// 	},
		// ],
		// sideMenu: [{}],
		// footer: [{}],
	};
}
