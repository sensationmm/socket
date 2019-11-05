import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import React from 'react';

import { Env, getEnv } from '@somo/pda-utils-env/src';

const Provider = ({ options = {}, children }) => {
  const client = new ApolloClient({
    uri: getEnv(Env.GraphqlUrl),
    fetch,
    ...options,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
