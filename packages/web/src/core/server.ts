import debug from 'debug';
import ImperiumServer from '@imperium/core';
import Connectors from './Connectors';
import serverModules from './serverModules';

const d = debug('imperium-proj.web');

export default function() {
	const server = new ImperiumServer({
		connectors: new Connectors(),
		serverModules,
	});

	return server.start();
}
