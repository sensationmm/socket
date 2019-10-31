import { GraphQLModule } from '@graphql-modules/core';
import UserModule from './user/src';

export const AppModule = new GraphQLModule({
  imports: [UserModule],
});
