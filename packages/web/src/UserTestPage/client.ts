import loadable from '@loadable/component';

// These are the dynamic routes
const HelloWorld = loadable(() => import('./client/components/HelloWorld'));

export default function() {
	return {
		name: 'User',
		routes: [
			{
				path: '/user',
				content: HelloWorld,
			},
			{
				path: '/user/:userId',
				content: HelloWorld,
			},
		],
		statusbar: [
			{
				component: () => 'Hello World',
				priority: 2,
				isVisible: () => {
					return true;
				},
			},
		],
		menu: [
			{
				component: () => {
					return 'Hello World';
				},
				priority: 2,
				isVisible: contextType => {
					return contextType === '/client';
				},
			},
		],
		// sideMenu: [{}],
		// footer: [{}],
	};
}
