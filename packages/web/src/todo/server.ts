import debug from 'debug';
import faker from 'faker';
import {User, Todo} from './server/models';
import TodoSchema from './server/graphql/Todo.graphqls';

const d = debug('app.todo.server');

export default function Users() {
	return {
		name: 'Users',
		async startup() {
			// await new User({
			// 	firstName: faker.name.firstName(),
			// 	lastName: faker.name.lastName(),
			// 	passwordHash: faker.random.alphaNumeric(),
			// 	todos: [
			// 		await new Todo({
			// 			title: faker.lorem.words(),
			// 		}).save(),
			// 		await new Todo({
			// 			title: faker.lorem.words(),
			// 		}).save(),
			// 		await new Todo({
			// 			title: faker.lorem.words(),
			// 		}).save(),
			// 	],
			// }).save();
		},
		schema: [TodoSchema],
		resolvers() {
			return {
				User: {
					todos: user => Todo.getByUser(user),
				},
				Query: {
					getUsers: (obj, args, context) => User.get({}, context),
					getUser: (obj, {id}, context) => User.getOne(id, context),
				},
				Mutation: {
					async editTodo(obj, {id, title, completed}, context) {
						await Todo.createQueryBuilder()
							.update()
							.set({title, completed})
							.where('todo.id = :id', {id})
							.execute();
						// via magic, this updates the cache. nothing more is needed on the client.
						return {id, title, completed};
					},
				},
			};
		},
		// will be changed to context
		models() {
			return {
				User: User.createLoader(),
				Todo: Todo.createLoader(),
			};
		},
		// TypeORM specific (custom)
		entities() {
			return [User, Todo];
		},
	};
}
