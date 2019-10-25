import Users from './client/pages/Users';
import User from './client/pages/User';
import Todos from './client/pages/Todos';

export default function UsersClient() {
	return {
		name: 'Users',
		routes: [
			{path: '/user', component: Users, exact: true},
			{path: '/user/:id', component: User, exact: true},
			{path: '/todo', component: Todos},
		],
	};
}
