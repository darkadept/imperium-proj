import {ImperiumServerModuleFunction} from '@imperium/core';
import debug from 'debug';
import Sample from './server/graphql/Sample.graphqls';

const d = debug('app.sample');

let a = 0;

const sample: ImperiumServerModuleFunction = () => {
	return {
		name: 'Sample',
		schema: [Sample],
		resolvers(server) {
			const pubsub = server.options.graphqlPubSub;

			const res = {
				Query: {
					getIt() {
						return a;
					},
				},
				Mutation: {
					changeIt() {
						a++;
						d(`New a: ${a}`);
						if (pubsub) pubsub.publish('x', {getItChanged: `${a}`});
						return `New a: ${a}`;
					},
				},
			};

			if (pubsub) {
				res.Subscription = {
					getItChanged: {
						subscribe: () => pubsub.asyncIterator('x'),
					},
				};
			}
			return res;
		},
	};
};

export default sample;
