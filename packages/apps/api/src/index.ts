process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';

import { AppModule } from './modules';

const activeEnvironment = process.env.NODE_ENV || 'production';

// tslint:disable-next-line:no-console
console.info(`Using environment config: '${activeEnvironment}'`);
config({ path: `.env.${activeEnvironment}` });

const server = new ApolloServer({
  schema: AppModule.schema,
  context: (session) => session,
});

server.listen().then(({ url }) => {
  // tslint:disable-next-line: no-console
  console.log(`🚀  Server ready at ${url}`);
});
