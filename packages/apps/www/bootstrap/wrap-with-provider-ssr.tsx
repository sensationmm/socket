import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from '../src/state/store';
import createApolloClient from './apollo-client';

import { Provider as Apollo } from '@somo/pda-graphql-apollo/src';
import i18n from '@somo/pda-utils-i18n/src';

export default ({ element }) => (
  <Apollo client={createApolloClient(store, { ssrMode: true })}>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>{element}</Provider>
    </I18nextProvider>
  </Apollo>
);
