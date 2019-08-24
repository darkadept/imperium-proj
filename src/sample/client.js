import Dashboard from './client/components/Dashboard';

export default function() {
	return {
		routes: [
			{
				path: '/dashboard',
				content: Dashboard,
				permissions: ['flozz'],
			}
		]
	};
}
