import graphql from '@imperium/graphql/client';
import auth from '@imperium/auth/client';
import sample from '../sample/client';
import '@thx/controls/lib/styles.css';
import '../sample/client/sample.css';

export default [
	graphql,
	auth,
	sample,
];
