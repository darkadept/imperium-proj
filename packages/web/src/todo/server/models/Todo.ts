import debug from 'debug';
import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import OrderedDataLoader from '../OrderedDataLoader';
import User from './User';

const d = debug('app.todo.server.models.Todo');

interface TodoInput {
	title?: string;
	completed?: boolean;
}

@Entity()
class Todo extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(type => User, user => user.todos)
	user: User;

	@Column('varchar')
	title: string;

	@Column('boolean')
	completed: boolean;

	static createLoader() {
		return new OrderedDataLoader(keys => this.findByIds(keys));
	}

	static async getByUser(user) {
		// cannot do this with data loader because we dont have the id.
		return this.find({where: {user}, order: {id: 'ASC'}});
	}

	static async getOne(id, context) {
		return context.models.Todo.load(id);
	}

	constructor(todo: TodoInput = {}) {
		super();
		const {title, completed} = todo;
		this.title = title || 'New Todo';
		this.completed = completed || false;
	}
}

export default Todo;
