import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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

export default Todo;
