import ImperiumClient from '@imperium/core/lib/ImperiumClient';
import clientModules from './clientModules';

const client = new ImperiumClient({
	clientModules,
});
client.start();
