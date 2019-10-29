import * as React from 'react';
import { Provider } from 'react-redux';

import store from '../src/state/store';

export default ({ element }) => <Provider store={store}>{element}</Provider>;
