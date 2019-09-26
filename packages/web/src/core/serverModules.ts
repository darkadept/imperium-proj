import graphql from '@imperium/graphql/server';
import auth from '@imperium/auth/server';
import user from '@imperium/user/server';
import sample from '../sample/server';

export default [graphql, auth, user, sample];
