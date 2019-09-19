import debug from 'debug';
import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const d = debug('app.core.TestMutation');

export default function TestMutation() {
	const [doChange, {data, loading}] = useMutation(gql`
		mutation {
			changeIt
		}
	`);

	d('mutation', loading, data);

	return <div><button onClick={doChange}>Test Mutation</button></div>;
}
