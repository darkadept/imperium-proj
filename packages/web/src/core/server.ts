import debug from 'debug';
import ImperiumServer from '@imperium/core';
import Connectors from './Connectors';

const d = debug('imperium-proj.web');

export default function() {
	const server = new ImperiumServer({
		connectors: new Connectors(),
	});

	return server.start();
}
