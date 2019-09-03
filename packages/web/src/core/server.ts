import debug from 'debug';
import ImperiumServer from '@imperium/core/server';
import Connectors from './Connectors';
import serverModules from './serverModules';

const d = debug('imperium-proj.web');

export default function() {
	const server = new ImperiumServer({
		connectors: new Connectors(),
		serverModules,
		options() {
			return {
				accessToken: 'blah',
			};
		},
	});

	return server.start();
}
