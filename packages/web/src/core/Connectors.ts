import {connect} from 'mongoose';
import {ImperiumConnectors} from '@imperium/core';

export default class Connectors implements ImperiumConnectors {
	async create() {
		const mongoose = await connect(
			process.env.MONGOURL,
			{useNewUrlParser: true},
		);

		return {mongo: mongoose.connection.db, mongoose};
	}

	async close() {
		// eslint-disable-next-line no-console
		console.log('Closing web connectors');
	}
}
