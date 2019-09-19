import Sample from './Sample.graphqls';

let a = 0;

export default function sample() {
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
						if (pubsub) pubsub.publish('x', {getItChanged: `${a}`});
						return `New a: ${a}`;
					},
				},
			};

			if (pubsub) {
				res.Subscription = {
					getItChanged: {
						subscribe: () => pubsub.asyncIterator(['x']),
					},
				};
			}
			return res;
		},
	};
}
