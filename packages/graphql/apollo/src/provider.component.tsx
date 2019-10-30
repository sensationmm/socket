import { ApolloProvider } from '@apollo/react-hooks';
import { Env, getEnv } from '@somo/pda-utils-env/src';
import ApolloClient from 'apollo-boost';
// import { onError } from 'apollo-link-error';
import React from 'react';

const Provider = ({ children }) => {
  const client = new ApolloClient({
    uri: getEnv(Env.GraphqlUrl),
  });

  // const errorLink = onError(({ networkError, graphQLErrors }) => {
  //   if (graphQLErrors) {
  //     graphQLErrors.map(({ message, locations, path }) =>
  //       console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
  //     );
  //   }
  //   if (networkError) {
  //     console.log(`[Network err]: Message: ${networkError}`);
  //   }
  // });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
