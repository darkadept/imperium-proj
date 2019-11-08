import debug from 'debug';
import ImperiumClient from '@imperium/client';
import {RouteDirector} from '@imperium/router';
import clientModules from './clientModules';
import DefaultComponent from './DefaultComponent';

const d = debug('app.client');

const client = new ImperiumClient({
	clientModules,
	rootComponent: RouteDirector,
	rootProps: {
		routeDefaults: {
			// layout: ContainerLayout, // TODO this will be re-enabled in the future
			redirect: false,
		},
		rootRoute: {path: '/', content: DefaultComponent, exact: true},
	},
});

client.start().catch(err => {
	d(err);
});
