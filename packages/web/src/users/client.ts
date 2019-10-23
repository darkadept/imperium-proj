import Users from './client/Users';

export default function UsersClient() {
	return {
		name: 'Users',
		routes: [
			{
				path: '/user/:id?',
				component: Users,
			},
			{
				path: '/permission/:id?',
				component: Users,
			},
			{
				path: '/role/:id?',
				component: Users,
			},
		],
	};
}
