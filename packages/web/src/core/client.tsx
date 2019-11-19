import React from 'react';
import debug from 'debug';
import ImperiumClient from '@imperium/client';
import {RouteDirector} from '@imperium/router';
import clientModules from './clientModules';
import DefaultComponent from './DefaultComponent';

const d = debug('app.client');

const client = new ImperiumClient({
	clientModules,
	render(props) {
		return (
			<RouteDirector
				routeDefaults={{redirect: false}}
				rootRoute={{path: '/', content: DefaultComponent, exact: true}}
				{...props}
			/>
		);
	},
});

client.start().catch(err => {
	d(err);
});
