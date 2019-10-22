import graphql from '@imperium/graphql/server';
import auth from '@imperium/auth/server';
import user from '@imperium/user/server';
import sample from '../sample/server';
import users from '../users/server';

export default [graphql, users, sample];
