import React from 'react';
import {Link} from 'react-router-dom';

export default function HelloWorld() {
	return (
		<>
			<h1>User Page</h1>
			<Link to="/">Logout (home)</Link>
			<div>
				<Link to="/user/userId123">user id</Link>
			</div>
		</>
	);
}
