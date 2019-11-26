import { navigate } from 'gatsby-link';

import * as authTypes from '@somo/pda-redux-auth/src/types';
import { actions as notificationActions } from '@somo/pda-redux-notification/src';
import i18n from '@somo/pda-utils-i18n/src';
import store from '../src/state/store';

const errorHandler = ({ graphQLErrors }) => {
  for (const error of graphQLErrors) {
    switch (error.extensions.code) {
      case 'UNAUTHENTICATED':
        store.dispatch({ type: authTypes.UNAUTHENTICATED });
        navigate('/login');
        break;
      default:
        store.dispatch(
          notificationActions.createNotification(
            error.extensions.code.split('_').join(' '),
            i18n.t('errors.httpGeneric'),
            'GENERIC',
          ),
        );
        break;
    }
  }
};

export default {
  onError: errorHandler,
};
