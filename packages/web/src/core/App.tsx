import debug from 'debug';
import React from 'react';
import {useMutation, useQuery, useSubscription} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const d = debug('app.core.App');

export default function App() {
	const {loading, error, data} = useQuery(gql`
		query {
			getIt
		}
	`);
	const [doChange, {data: mdata, loading: mloading}] = useMutation(gql`
		mutation {
			changeIt
		}
	`);
	const {data: sdata, loading: sloading} = useSubscription(gql`
		subscription onStuff {
			getItChanged
		}
	`);

	d('query', loading, error, data);
	d('mutation', mloading, mdata);
	d('sub', sloading, sdata);

	// if (loading) return null;
	// if (sloading) return null;

	return (
		<div>
			<button onClick={doChange}>push</button>
			<br />
			my root app: {!loading && data.getIt}
			<br />
			is it changed? {!sloading && sdata.getItChanged}
		</div>
	);
}
