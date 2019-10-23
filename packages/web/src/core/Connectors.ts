import debug from 'debug';
import {ImperiumConnectors} from '@imperium/core';
import {Connection, createConnection} from 'typeorm';
import path from 'path';

const d = debug('app.core.connectors');

export default class Connectors implements ImperiumConnectors {
	_redisClient: any;
	_postgresConnection?: Connection;

	async create() {
		this._postgresConnection = await createConnection({
			type: 'postgres',
			username: process.env.PG_USERNAME,
			password: process.env.PG_PASSWORD,
			database: process.env.PG_DATABASE,
			port: (process.env.PG_PORT as unknown) as number,
			synchronize: true,
			entities: [path.resolve(__dirname, '../users/models/**/*')],
		});
		d(this._postgresConnection.isConnected);
		return {pg: this._postgresConnection};
		// return {};
	}

	async close() {
		if (this._postgresConnection) await this._postgresConnection.close();
	}
}
