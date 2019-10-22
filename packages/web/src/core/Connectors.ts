import {ImperiumConnectors} from '@imperium/core';
import {ConnectionManager, Connection} from 'typeorm';

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
		});
		await this._postgresConnection.connect();
		return {pg: this._postgresConnection};
	}

	async close() {
		await this._postgresConnection.close();
	}
}
