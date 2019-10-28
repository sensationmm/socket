import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';

import { AppModule } from './modules';

const server = new ApolloServer({
  schema: AppModule.schema,
  context: (session) => session,
});

server.listen().then(({ url }) => {
  // tslint:disable-next-line: no-console
  console.log(`🚀  Server ready at ${url}`);
});
