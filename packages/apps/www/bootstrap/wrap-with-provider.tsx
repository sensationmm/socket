import { Provider as Apollo } from '@somo/pda-graphql-apollo/src';
import * as React from 'react';
import { Provider } from 'react-redux';

import store from '../src/state/store';

const WrapWithProvider: React.FC<{ element: React.ComponentType }> = ({ element }) => (
  <Apollo>
    <Provider store={store}>{element}</Provider>
  </Apollo>
);

export default WrapWithProvider;
