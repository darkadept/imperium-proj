import debug from 'debug';
import {schema, resolvers} from './graphql';

const d = debug('app.sample');

export default function sample() {
	return {
		name: 'Sample',
		schema,
		resolvers,
	};
}
