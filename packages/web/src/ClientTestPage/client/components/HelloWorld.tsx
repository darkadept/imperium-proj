import React from 'react';
import {Link} from 'react-router-dom';

export default function HelloWorld() {
	return (
		<>
			<h1>Client Page with more content</h1>
			<Link to="/">Logout (home)</Link>
		</>
	);
}
