import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {Todo} from '../../models';
// @ts-ignore
import editTodoMutation from '../graphql/editTodo.graphql';

interface Props {
	value: Todo;
}

export default function TodoInput({value: {id, title, completed}}: Props) {
	const [editTodo, {data}] = useMutation<{editTodo: Todo[]}>(editTodoMutation);
	return (
		<label>
			<input
				id={`todo-check-${id}`}
				type="checkbox"
				checked={completed}
				onChange={({target: {checked}}) => editTodo({variables: {completed: checked}})}
			/>
			{title}
		</label>
	);
}
