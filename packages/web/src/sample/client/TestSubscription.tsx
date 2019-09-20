import debug from 'debug';
import React from 'react';
import {useSubscription} from '@apollo/react-hooks';
import subscribe from './subscribe.graphql';

const d = debug('app.core.TestQuery');

export default function TestSubscription() {
	const {data, loading} = useSubscription(subscribe);

	d('subscription', loading, data);

	return <div>Test Subscription: {loading ? 'Loading' : data.getItChanged}</div>;
}
