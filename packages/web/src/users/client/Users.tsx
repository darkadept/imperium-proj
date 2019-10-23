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

								<h4>
									Permissions <small>required to access this resource</small>
								</h4>
								<ul>
									{u.permissions.map(p => (
										<Link as="li" key={p.id} to={`/permission/${p.id}`}>
											{p.name}
										</Link>
									)) || 'No Permissions'}
								</ul>

								<h4>Roles</h4>
								<ul>
									{u.roles.map(r => (
										<Link as="li" key={r.id} to={`/role/${r.id}`}>
											{r.name}
										</Link>
									)) || 'No Roles.'}
								</ul>
							</li>
					  ))
					: 'No Users.'}
			</ul>
		</div>
	);
}
