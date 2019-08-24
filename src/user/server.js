import debug from 'debug';
import {schema, resolvers} from './server/graphql';
import models from './server/models';

const d = debug('imperium.proj.server.user.startup');

export default function() {
	return {
		models,
		schema,
		resolvers,
		async startup(context) {
			const {Users, Auth} = context.models;

			d('Getting my user.');
			const user = await Users.getByEmail('darkadept@durbn.net');
			if (user) {
				// await Auth.signIn('darkadept@durbn.net', 'sysadmin');
			} else {
				d('Creating default user');
				await Users.createUser(
					{
						email: 'darkadept@durbn.net',
						password: 'sysadmin',
						roles: ['sysadmin'],
					},
					{
						firstName: 'System',
						lastName: 'Administrator',
					},
					{
						verified: true,
					},
				);
			}
		},
	};
}
