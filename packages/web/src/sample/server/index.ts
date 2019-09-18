import Sample from './Sample.graphqls';

let a = 0;

export default function sample() {
	return {
		name: 'Sample',
		schema: [Sample],
		resolvers(server) {
			const pubsub = server.options.graphqlPubSub;
			if (!pubsub) throw new Error('Subscriptions not enabled');
			return {
				Query: {
					getIt() {
						return 'the message';
					},
				},
				Mutation: {
					changeIt() {
						a++;
						pubsub.publish('x', {getItChanged: `${a}`});
						return 'changed';
					},
				},
				Subscription: {
					getItChanged: {
						subscribe: () => pubsub.asyncIterator(['x']),
					},
				},
			};
		},
	};
}
