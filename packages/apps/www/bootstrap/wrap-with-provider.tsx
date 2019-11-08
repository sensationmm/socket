import * as React from 'react';
import { Provider } from 'react-redux';

import { Provider as Apollo } from '@somo/pda-graphql-apollo/src';
import store from '../src/state/store';
import apolloOptions from './apollo-options';

const WrapWithProvider: React.FC<{ element: React.ComponentType }> = ({ element }) => (
  <Apollo options={apolloOptions}>
    <Provider store={store}>{element}</Provider>
  </Apollo>
);

export default WrapWithProvider;
