import { GraphQLModule } from '@graphql-modules/core';
import 'graphql-import-node';
import { AccountProvider } from './provider';
import resolvers from './resolvers';
import * as typeDefs from './schema.graphql';

const Accounts = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [AccountProvider],
  context: ({ req }) => ({
    token: req.headers.authorization,
  }),
});

export default Accounts;
