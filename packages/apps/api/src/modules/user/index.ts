import { GraphQLModule } from '@graphql-modules/core';
import 'graphql-import-node';
import { AuthProvider } from '../../providers';
import { UserProvider } from './provider';
import resolvers from './resolvers';
import * as typeDefs from './schema.graphql';

const Users = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [UserProvider, AuthProvider],
  context: ({ req }, _, { injector }) => {
    const auth = req.headers.authorization;
    const jwt = auth.substring(auth.indexOf(' ') + 1);
    let currentUser;
    try {
      currentUser = injector.get(AuthProvider).validateJwt(jwt);
    } catch (e) {
      throw Error('Invalid JWT');
    }

    return { currentUser };
  },
});

export default Users;
