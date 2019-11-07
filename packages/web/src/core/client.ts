import debug from 'debug';
import ImperiumClient from '@imperium/client';
import {RouteDirector} from '@imperium/router';
import clientModules from './clientModules';
import routes from '../users/routes';
import DefaultComponent from '../sample/components/DefaultComponent';

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
	routes,
});

client.start().catch(err => {
	d(err);
});
