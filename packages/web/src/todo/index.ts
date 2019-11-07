import Users from './pages/Users';
import User from './pages/User';
import Todos from './pages/Todos';

export default function TodoClientModule() {
	return {
		name: 'Todo',
		routes: [
			{path: '/user', component: Users, exact: true},
			{path: '/user/:id', component: User, exact: true},
			{path: '/todo', component: Todos},
		],
	};
}
