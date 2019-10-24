import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {User} from '../models';
import getUsers from './graphql/getUsers.graphql';

export default function Users(props) {
	const {loading, error, data} = useQuery<{getUsers: User[]}>(getUsers);
	return (
		<div>
			<p>Users will be listed here.</p>
			<ul>
				{!loading && data
					? data.getUsers.map(u => (
							<li key={u.id}>
								<Link to={`/user/${u.id}`}>
									{u.firstName} {u.lastName}
								</Link>
							</li>
					  ))
					: 'No Users.'}
			</ul>
		</div>
	);
}
