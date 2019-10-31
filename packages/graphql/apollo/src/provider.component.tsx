import { ApolloProvider } from '@apollo/react-hooks';
import { Env, getEnv } from '@somo/pda-utils-env/src';
import ApolloClient from 'apollo-boost';
import React from 'react';

const Provider = ({ options = {}, children }) => {
  const client = new ApolloClient({
    uri: getEnv(Env.GraphqlUrl),
    ...options,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
