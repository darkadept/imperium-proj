import express from 'express';
import blah from './blah';

export default function() {
	// Create express app
	const app = express();
	app.listen(process.env.PORT || 4000, () => {
		// console.log(`  PID ${process.pid} listening on port ${process.env.PORT || 4000}`);
	});

	blah();
}
