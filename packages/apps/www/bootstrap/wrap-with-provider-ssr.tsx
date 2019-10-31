import { Provider as Apollo } from '@somo/pda-graphql-apollo/src';
import * as React from 'react';
import { Provider } from 'react-redux';

import store from '../src/state/store';

export default ({ element }) => (
  <Apollo options={{ ssrMode: true }}>
    <Provider store={store}>{element}</Provider>
  </Apollo>
);
