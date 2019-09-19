import debug from 'debug';
import React from 'react';
import TestQuery from '../sample/client/TestQuery';
import TestSubscription from '../sample/client/TestSubscription';
import TestMutation from '../sample/client/TestMutation';

const d = debug('app.core.App');

export default function App() {
	return (
		<div>
			<TestQuery />
			<TestMutation />
			<TestSubscription />
		</div>
	);
}
