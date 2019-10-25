import 'graphql-import-node';
import { GraphQLModule } from '@graphql-modules/core';
import * as typeDefs from './schema.graphql';
import resolvers from './resolvers';
import { UserProvider } from './provider';

const Users = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [UserProvider],
});

export default Users;
