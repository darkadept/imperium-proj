import debug from 'debug';
import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import query from './query.graphql';

const d = debug('app.core.TestQuery');

export default function TestQuery() {
	const {loading, error, data} = useQuery(query);

	d('query', loading, error, data);

	return <div>Test Query: {loading ? 'Loading' : data.getIt}</div>;
}
