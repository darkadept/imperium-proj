import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {User} from '../../server/models';
import TodoInput from '../components/TodoInput';
import getUser from '../graphql/getUser.graphql';

export default function Users(props: RouteComponentProps<{id: number}>) {
	const userId = props.match.params.id;
	const {loading, data} = useQuery<{getUser: User}>(getUser, {variables: {id: parseInt(userId, 10)}});
	return (
		<div>
			{!loading && data ? (
				<>
					<h3>{data.getUser.firstName}`s Todos</h3>
					{data.getUser.todos.map(todo => (
						<TodoInput key={todo.id} value={todo} />
					))}
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
}
