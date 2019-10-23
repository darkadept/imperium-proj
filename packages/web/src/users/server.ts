import debug from 'debug';
import {User, Permission} from './models';
import UserSchema from './server/graphql/Users.graphqls';

const d = debug('app.users.server.index');

export default function Users() {
	return {
		name: 'Users',
		async startup() {
			// await User.clear();

			const permission = new Permission();
			permission.name = 'Test Permission';
			await permission.save();

			const user = new User();
			user.firstName = 'Test';
			user.lastName = 'Tickle';
			user.email = 'email@example.com';
			user.passwordHash = 'ThIsHaSh';
			user.permissions = [permission];
			user.roles = [];
			user.accounts = [];
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
