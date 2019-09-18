import debug from 'debug';
import ImperiumClient from '@imperium/core/client';
import {ContainerLayout} from '@thx/router';
import clientModules from './clientModules';
import App from './App';

const d = debug('app.client');

const client = new ImperiumClient({
	clientModules,
	routeDefaults: {
		layout: ContainerLayout,
		redirect: false,
	},
	rootRoute: {
		path: '/',
		component: App,
		exact: true,
	},
});

client.start().catch(err => {
	d(err);
});
