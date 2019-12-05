import { GraphQLModule } from '@graphql-modules/core';

import Accounts from './account';
import Users from './user';

export const AppModule = new GraphQLModule({
  imports: [Users, Accounts],
});
