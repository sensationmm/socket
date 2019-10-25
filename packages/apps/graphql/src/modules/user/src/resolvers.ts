import { GraphQLModule } from '@graphql-modules/core';
import { UserProvider } from './provider';

export default {
  Query: {
    user: (root, { id }, { injector }) => injector.get(UserProvider).getUserById(id),
  },
  User: {
    id: (user) => user._id,
    name: (user) => user.username,
  },
};
