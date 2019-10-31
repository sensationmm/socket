import { GraphQLModule } from '@graphql-modules/core';

import Users from './user';

export const AppModule = new GraphQLModule({
  imports: [Users],
});
