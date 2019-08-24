import React from 'react';
import {Redirect} from 'react-router-dom';
// import AppLayout from '../client/components/AppLayout';

export const rootRoute = {
	path: '/',
	exact: true,
	content: () => <Redirect to="/dashboard"/>,
};

// Default route props
export default {
	layout: (props) => {
		const {route} = props;
		return (
			<div>
				<h1>Layout</h1>
				<route.content/>
			</div>
		);
	},
	redirect: true,
};
