import debug from 'debug';
import faker from 'faker';
import {User, Todo, UserHistory, TodoHistory, UserHistorySubscriber, TodoHistorySubscriber} from './server/models';
import TodoSchema from './server/graphql/Todo.graphqls';

const d = debug('app.todo.server');

export default function Users() {
	return {
		name: 'Users',
		async startup() {
			await new User({
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				passwordHash: faker.lorem
					.words()
					.split(' ')
					.join(''),
				todos: [
					await new Todo({title: faker.lorem.words()}).save(),
					await new Todo({title: faker.lorem.words()}).save(),
					await new Todo({title: faker.lorem.words()}).save(),
				],
			}).save();
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
					getTodoHistory: (obj, {userId}) => TodoHistory.find({}),
				},
				Mutation: {
					editTodo: async (obj, {id, title, completed}) => Todo.getRepository().save({id, title, completed}),
				},
			};
		},
		// will be changed to context
		// contextModels maybe?
		models() {
			return {
				User: User.createLoader(),
				Todo: Todo.createLoader(),
				TodoHistory: TodoHistory.createLoader(),
			};
		},
		// TypeORM specific (custom)
		entities() {
			return [User, UserHistory, Todo, TodoHistory];
		},
		subscribers() {
			return [UserHistorySubscriber, TodoHistorySubscriber];
		},
	};
}
