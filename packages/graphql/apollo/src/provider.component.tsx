import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';

const Provider = ({ client, children }) => <ApolloProvider client={client}>{children}</ApolloProvider>;

export default Provider;
