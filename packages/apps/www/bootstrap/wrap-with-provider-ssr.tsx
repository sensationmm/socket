import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from '../src/state/store';
import apolloOptions from './apollo-options';

import { Provider as Apollo } from '@somo/pda-graphql-apollo/src';
import i18n from '@somo/pda-utils-i18n/src';

export default ({ element }) => (
  <Apollo options={{ ssrMode: true, ...apolloOptions }}>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>{element}</Provider>
    </I18nextProvider>
  </Apollo>
);
