import {ImperiumConnectors} from '@imperium/server';
import {ConnectionManager, Connection} from 'typeorm';
import path from 'path';

export default class Connectors implements ImperiumConnectors {
	_postgresConnection?: Connection;

	async create() {
		const connectionManager = new ConnectionManager();
		this._postgresConnection = connectionManager.create({
			type: 'postgres',
			url: process.env.POSTGRESQL_URL,
			synchronize: true,
			entities: [path.resolve(__dirname, '../users/models/*')],
		});
		await this._postgresConnection.connect();

		return {pg: this._postgresConnection};
	}

	async close() {
		if (this._postgresConnection) await this._postgresConnection.close();
	}
}
