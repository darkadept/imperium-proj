import debug from 'debug';
import React from 'react';
import {Link} from 'react-router-dom';

const d = debug('app.sample.DefaultComponent');

export default function DefaultComponent() {
	return (
		<>
			<h1>Login</h1>
			<ul>
				<li>
					<Link to="/user">Login (Route to User)</Link>
				</li>
				<li>
					<Link to="/client">Login (Route to Client)</Link>
				</li>
			</ul>
		</>
	);
}
