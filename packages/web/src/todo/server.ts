import debug from 'debug';
import {User, Todo} from './models';
// @ts-ignore
import TodoSchema from './server/graphql/Todo.graphqls';

const d = debug('app.users.server.index');

export default function Users() {
	return {
		name: 'Users',
		async startup() {
			await new User({
				firstName: 'Test',
				lastName: 'Tickle',
				passwordHash: 'ThIsHaSh',
				todos: [
					await new Todo({
						title: 'Todo 1',
					}).save(),
					await new Todo({
						title: 'Todo 2',
					}).save(),
					await new Todo({
						title: 'Todo 3',
					}).save(),
				],
			}).save();
		},
		schema: [TodoSchema],
		resolvers() {
			return {
				Query: {
					getUsers: () => User.find(),
					getUser: id => User.find({id}),
				},
			};
		},
	};
}
