import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';

import { AppModule } from './modules';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: AppModule.schema,
    graphiql: true,
  }),
);

app.listen(4000, (url) => {
  console.log(`🚀  Server ready at ${url}`);
});

// import { ApolloServer } from 'apollo-server';

// import { AppModule } from './modules';

// const server = new ApolloServer({
//   schema: AppModule.schema,
//   context: (session) => session,
// });

// server.listen().then(({ url }) => {
//   // tslint:disable-next-line: no-console
//   console.log(`🚀  Server ready at ${url}`);
// });
