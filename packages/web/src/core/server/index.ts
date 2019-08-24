import express from 'express';
import server from '@imperium/core';
import blah from './blah';

export default function() {
	server();

	// Create express app
	const app = express();
	app.listen(process.env.PORT || 4001, () => {
		// console.log(`  PID ${process.pid} listening on port ${process.env.PORT || 4000}`);
	});

	blah();
}
