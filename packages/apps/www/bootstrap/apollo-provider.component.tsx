import { ApolloProvider as Provider } from '@apollo/react-hooks';
import React from 'react';

export const ApolloProvider = ({ client, children }) => <Provider client={client}>{children}</Provider>;
