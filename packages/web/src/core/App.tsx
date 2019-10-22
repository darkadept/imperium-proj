import debug from 'debug';
import React from 'react';
import {Link} from 'react-router-dom';

const d = debug('app.core.App');

// <Image src="https://makingyourmilescount.com/wp-content/themes/ST_Light_Responsive_Business/img/header-right.png" />

export default function App() {
	return (
		<>
			<Link to="/users">Users</Link>
			<br/>
			<Link to="/accounts">Accounts</Link>
		</>
	);
}
