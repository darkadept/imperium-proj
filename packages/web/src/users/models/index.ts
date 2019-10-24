/* eslint-disable no-unused-vars */
import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';

interface TodoInput {
	title?: string;
	completed?: boolean;
}

@Entity()
class Todo extends BaseEntity {
	@PrimaryGeneratedColumn()
	// @ts-ignore
	id: number;

	@Column('varchar')
	title: string;

	@Column('boolean')
	completed: boolean;

	constructor(todo: TodoInput = {}) {
		super();
		const {title, completed} = todo;
		this.title = title || 'New Todo';
		this.completed = completed || false;
	}
}

interface UserInput {
	firstName: string;
	lastName: string;
	passwordHash?: string;
	todos?: Todo[];
}

@Entity()
class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	// @ts-ignore
	id: number;

	@Column('varchar')
	firstName: string;

	@Column('varchar')
	lastName: string;

	@Column('varchar', {select: false})
	passwordHash?: string;

	@ManyToMany(type => Todo)
	@JoinTable()
	todos: Todo[];

	constructor(user: UserInput) {
		super();
		const {firstName, lastName, passwordHash, todos} = user;
		this.firstName = firstName;
		this.lastName = lastName;
		this.passwordHash = passwordHash;
		this.todos = todos || [];
	}
}

export {Todo, User};
