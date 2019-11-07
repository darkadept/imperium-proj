import React from 'react';
import {Link} from 'react-router-dom';

export default function HelloWorld() {
	return (
		<>
			<h1>Client Page with more content so we can test on layouts with lots of content</h1>
			<Link to="/">Logout (home)</Link>
		</>
	);
}
