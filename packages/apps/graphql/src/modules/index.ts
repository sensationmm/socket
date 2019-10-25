import { GraphQLModule } from '@graphql-modules/core';
import Users from './user/src';

export const AppModule = new GraphQLModule({
  imports: [Users],
});
