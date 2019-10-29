import * as React from 'react';
import { Provider } from 'react-redux';

import store from '../src/state/store';

const WrapWithProvider: React.FC<{ element: React.ComponentType }> = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

export default WrapWithProvider;
