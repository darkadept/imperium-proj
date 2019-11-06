import {ImperiumConnectors} from '@imperium/core';
import {ConnectionManager, Connection} from 'typeorm';
import path from 'path';

export default class Connectors implements ImperiumConnectors {
	_redisClient: any;
	_postgresConnection?: Connection;

	async create() {
		const connectionManager = new ConnectionManager();
		this._postgresConnection = connectionManager.create({
			type: 'postgres',
			username: process.env.PG_USERNAME,
			password: process.env.PG_PASSWORD,
			database: process.env.PG_DATABASE,
			port: (process.env.PG_PORT as unknown) as number,
			synchronize: true,
			entities: [path.resolve(__dirname, '../users/models/*')],
		});
		await this._postgresConnection.connect();
		return {pg: this._postgresConnection};
		// return {};
	}

	async close() {
		if (this._postgresConnection) await this._postgresConnection.close();
	}
}
