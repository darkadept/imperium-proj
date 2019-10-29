import debug from 'debug';
import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {Todo} from '../../server/models';
// @ts-ignore
import editTodoMutation from '../graphql/editTodo.graphql';

const d = debug('app.src.todo.client.components.TodoInput');

interface Props {
	value: Todo;
}
// ({target: {checked}}) => editTodo({variables: {completed: checked}})
export default function TodoInput({value: {id, title, completed}}: Props) {
	const [editTodo, {data}] = useMutation<{editTodo: Todo[]}>(editTodoMutation);
	return (
		<label>
			<input
				type="checkbox"
				checked={completed}
				onChange={({target: {checked}}) => editTodo({variables: {id, title, completed: checked}})}
			/>
			{title}
			<br />
		</label>
	);
}
