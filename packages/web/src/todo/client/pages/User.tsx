import React from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {User} from '../../models';
import getUser from '../graphql/getUser.graphql';

export default function Users(props: RouteComponentProps<{id: number}>) {
	const userId = props.match.params.id;
	const {loading, data} = useQuery<{getUser: User}>(getUser, {variables: {id: userId}});
	return (
		<div>
			{!loading && data ? (
				<>
					<h3>{data.getUser.firstName}`s Todos</h3>
					<ul>
						{data.getUser.todos.map(todo => (
							<li key={todo.id}>{todo.title}</li>
						))}
					</ul>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
}
