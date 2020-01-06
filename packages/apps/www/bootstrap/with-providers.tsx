import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';

import i18n from '@somo/pda-utils-i18n/src';
import store from '../src/state/store';
import createApolloClient from './apollo-client';
import { ApolloProvider } from './apollo-provider.component';

export const WithProviders = ({ element }): JSX.Element => (
  <ApolloProvider client={createApolloClient(store)}>
    <I18nextProvider i18n={i18n}>
      <ReduxProvider store={store}>{element}</ReduxProvider>
    </I18nextProvider>
  </ApolloProvider>
);
