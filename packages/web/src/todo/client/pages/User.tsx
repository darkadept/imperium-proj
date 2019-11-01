import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import TodoInput from '../components/TodoInput';
import getUser from '../graphql/getUser.graphql';
import {User, TodoHistory} from '../types';

export default function Users(props: RouteComponentProps<{id: number}>) {
	const userId = props.match.params.id;
	const {loading, data} = useQuery<{getUser: User; getTodoHistory: TodoHistory[]}>(getUser, {
		variables: {id: parseInt(userId, 10)},
	});
	return (
		<div>
			{!loading && data ? (
				<>
					<h3>{data.getUser.firstName}`s Todos</h3>
					{data.getUser.todos.map(todo => (
						<TodoInput key={todo.id} value={todo} />
					))}
					<h3>{data.getUser.firstName}`s Todos History</h3>
					{data.getTodoHistory.reverse().map(t => (
						<p key={t.id}>
							Todo #{t.id} was {t.action} at {new Date(t.makeActionAt).toLocaleTimeString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} with values{' '}
							<pre style={{display: 'inline'}}>{JSON.stringify({title: t.title, completed: t.completed})}</pre>
						</p>
					))}
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
}
