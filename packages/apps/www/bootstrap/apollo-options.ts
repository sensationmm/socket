import { navigate } from 'gatsby-link';

import * as types from '@somo/pda-redux-auth/src/types';
import store from '../src/state/store';

const errorHandler = ({ graphQLErrors }) => {
  if (graphQLErrors) {
    for (const error of graphQLErrors) {
      switch (error.extensions.code) {
        case 'UNAUTHENTICATED':
          store.dispatch({ type: types.UNAUTHENTICATED });
          navigate('/login');
          break;
      }
    }
  }
};

export default {
  onError: errorHandler,
};
