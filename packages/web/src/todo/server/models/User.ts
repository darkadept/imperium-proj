import {BaseEntity, Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import debug from 'debug';
import OrderedDataLoader from '../OrderedDataLoader';
import Todo from './Todo';

const d = debug('app.todo.server.models.User');

interface UserInput {
	firstName?: string;
	lastName?: string;
	passwordHash?: string;
	todos?: Todo[];
}

@Entity()
class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar')
	firstName: string;

	@Column('varchar')
	lastName: string;

	@Column('varchar', {select: false})
	passwordHash?: string;

	@OneToMany(type => Todo, todo => todo.user)
	todos: Todo[]; // TypeORM initialises this.

	static createLoader() {
		return new OrderedDataLoader<number, User>(keys => this.findByIds(keys));
	}

	static get(args: UserInput, context) {
		return this.find(args);
	}

	static getOne(id: number, context) {
		return context.models.User.load(id);
	}

	constructor(user: UserInput = {firstName: '', lastName: ''}) {
		super();
		const {firstName, lastName, passwordHash, todos} = user;
		this.firstName = firstName;
		this.lastName = lastName;
		this.passwordHash = passwordHash;
		this.todos = todos;
	}
}

export default User;
