import debug from 'debug';
import {ImperiumConnectors, ImperiumServer} from '@imperium/core';
import {Connection, createConnection} from 'typeorm';
import isFunction from 'lodash/isFunction';

const d = debug('app.core.connectors');

export default class Connectors implements ImperiumConnectors {
	_redisClient: any;
	_postgresConnection?: Connection;

	async create(server: ImperiumServer) {
		// This gets all the entities from all of my modules.
		const entities = server.modules.reduce((memo, module) => {
			if (module.entities && isFunction(module.entities)) {
				return [...memo, ...module.entities()];
			}
			return memo;
		}, []);
		const subscribers = server.modules.reduce((memo, module) => {
			if (module.subscribers && isFunction(module.subscribers)) {
				return [...memo, ...module.subscribers()];
			}
			return memo;
		}, []);

		this._postgresConnection = await createConnection({
			type: 'postgres',
			username: process.env.PG_USERNAME,
			password: process.env.PG_PASSWORD,
			database: process.env.PG_DATABASE,
			port: (process.env.PG_PORT as unknown) as number,
			synchronize: true, // Development ONLY
			entities,
			subscribers,
		});
		return {pg: this._postgresConnection};
	}

	async close() {
		if (this._postgresConnection) await this._postgresConnection.close();
	}
}
