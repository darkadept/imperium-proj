import {ImperiumConnectors, ImperiumServer} from '@imperium/server';
import {Connection, createConnection} from 'typeorm';

export default class Connectors implements ImperiumConnectors {
	_postgresConnection?: Connection;

	async create(server: ImperiumServer) {
		// This gets all the entities from all of my modules.
		const entities = server.modules.reduce((memo, module) => {
			if (module.entities && module.entities instanceof Function) {
				return [...memo, ...module.entities()];
			}
			return memo;
		}, []);
		const subscribers = server.modules.reduce((memo, module) => {
			if (module.subscribers && module.subscriber instanceof Function) {
				return [...memo, ...module.subscribers()];
			}
			return memo;
		}, []);

		this._postgresConnection = await createConnection({
			type: 'postgres',
			url: process.env.POSTGRESQL_URL,
			synchronize: true, // dev only
			entities,
			subscribers,
		});

		return {pg: this._postgresConnection};
	}

	async close() {
		if (this._postgresConnection) await this._postgresConnection.close();
	}
}
