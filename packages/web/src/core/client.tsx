import {ImperiumClient} from '@imperium/core/client';
import clientModules from './clientModules';

const client = new ImperiumClient({
	clientModules,
});
client.start();
