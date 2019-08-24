import graphql from '@imperium/graphql/server';
import auth from '@imperium/auth/server';
import sample from '../sample/server';
import user from '../user/server';

export default [
	graphql,
	auth,
	sample,
	user,
];
