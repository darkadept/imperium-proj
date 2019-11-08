import debug from 'debug';
import Sample from './Sample.graphqls';
import MyCounter from '../models/MyCounter';

const d = debug('app.sample.graphql');

export const schema = [Sample];

export function resolvers(server) {
	const pubsub = server.options.graphqlPubSub;

	const res = {
		Query: {
			getCounter() {
				return MyCounter.getCounter();
			},
		},
		Mutation: {
			incCounter() {
				const newNumber = MyCounter.inc();
				d(`New counter: ${newNumber}`);
				if (pubsub) pubsub.publish('counterChanged', {counterChanged: newNumber});
				return newNumber;
			},
		},
	};

	if (pubsub) {
		res.Subscription = {
			counterChanged: {
				subscribe: () => pubsub.asyncIterator('counterChanged'),
			},
		};
	}
	return res;
}
