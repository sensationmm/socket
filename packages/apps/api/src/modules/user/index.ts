import { GraphQLModule } from '@graphql-modules/core';
import 'graphql-import-node';
import { UserProvider } from './provider';
import resolvers from './resolvers';
import * as typeDefs from './schema.graphql';

const Users = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [UserProvider],
  context: ({ req }) => ({
    token: req.headers.authorization,
  }),
});

export default Users;
