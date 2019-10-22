import debug from 'debug';
import ImperiumClient from '@imperium/core/client';
import {RouteDirector} from '@imperium/router';
import clientModules from './clientModules';
import DefaultComponent from '../sample/client/components/DefaultComponent';

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

// TODO working on HMR
// if (module.hot) {
// 	module.hot.accept('./clientModules', () => {
// 		d('Hot Accept: clientModules');
// 		client.renderRoot(clientModules, RouteDirector);
// 	});
// }
