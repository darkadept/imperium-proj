import {ImperiumServerModule} from '@imperium/core';
import debug from 'debug';
import faker from 'faker';
import TodoSchema from './server/graphql/Todo.graphqls';
import {Todo, TodoHistory, TodoHistorySubscriber, User, UserHistory, UserHistorySubscriber} from './server/models';

const d = debug('app.todo.server');

export default function Users(): ImperiumServerModule {
	return {
		name: 'Users',
		async startup(sever) {
			if ((await User.count()) < 3) {
				const user = await new User({
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					passwordHash: faker.lorem
						.words()
						.split(' ')
						.join(''),
				}).save();
				await new Todo({title: faker.lorem.words(), user}).save();
				await new Todo({title: faker.lorem.words(), user}).save();
				await new Todo({title: faker.lorem.words(), user}).save();
				await user.save();
			}
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
					getTodoHistory: (obj, {userId}) => TodoHistory.getByUser({id: userId}),
				},
				Mutation: {
					editTodo: async (obj, {id, title, completed}) => Todo.getRepository().save({id, title, completed}),
				},
			};
		}, // websocket ?
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
