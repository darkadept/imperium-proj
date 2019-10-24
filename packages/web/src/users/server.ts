import debug from 'debug';
import {User, Permission} from './models';
import UserSchema from './server/graphql/Users.graphqls';

const d = debug('app.users.server.index');

export default function Users() {
	return {
		name: 'Users',
		async startup() {
			const permission = new Permission();
			permission.name = 'Test Permission';
			await permission.save();

			const user = new User({
				firstName: 'Test',
				lastName: 'Tickle',
				email: 'email@example.com',
				passwordHash: 'ThIsHaSh',
				permissions: [permission],
				roles: [],
				accounts: [],
			});

			await user.save();
		},
		schema: [UserSchema],
		resolvers() {
			return {
				Query: {
					getUsers: () => User.find({relations: ['permissions', 'roles']}),
				},
			};
		},
	};
}
