// import {connect} from 'mongoose';
import {ImperiumConnectors} from '@imperium/core';
// import {SharedCache} from '@thx/extras/server';
// import redis from 'redis';

export default class Connectors implements ImperiumConnectors {
	// _redisClient: any;

	async create(server) {
		console.log(server);
		// const mongoose = await connect(
		// 	process.env.MONGOURL,
		// 	{useNewUrlParser: true, useUnifiedTopology: true},
		// );
		//
		// this._redisClient = redis.createClient({
		// 	host: process.env.REDIS_HOST,
		// 	port: parseInt(process.env.REDIS_PORT || '6379', 10),
		// 	db: parseInt(process.env.REDIS_DB || '0', 10),
		// });
		//
		// const sharedCache = new SharedCache({redis: this._redisClient, prefix: 'IMPPROJ_'});
		//
		// return {mongo: mongoose.connection.db, mongoose, sharedCache};
		return {};
	}

	async close() {
		// eslint-disable-next-line no-console
		// console.log('Closing connectors');
		// await new Promise(resolve => {
		// 	this._redisClient.quit(() => {
		// 		resolve();
		// 	});
		// });
		// await new Promise(resolve => setImmediate(resolve));
	}
}
