import debug from 'debug';
import {RouteDirector} from '@imperium/router';
import ImperiumClient from '@imperium/core/client';
import DefaultComponent from '../sample/client/components/DefaultComponent';
import HeaderBar from '../THR4Layout/HeaderBar';
import FooterBar from '../THR4Layout/FooterBar';
import SideMenu from '../THR4Layout/SideMenu';
import MenuBar from '../THR4Layout/MenuBar';
import clientModules from './clientModules';
import 'semantic-ui-css/semantic.min.css';
import THR4Layout from '../THR4Layout';
import '../THR4Layout/styles.css';

const d = debug('app.client');

const client = new ImperiumClient({
	clientModules,
	rootComponent: RouteDirector,
	rootProps: {
		routeDefaults: {
			layout: THR4Layout,
			menu: HeaderBar,
			statusbar: MenuBar,
			sidebar: SideMenu,
			content: DefaultComponent,
			footer: FooterBar,
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
