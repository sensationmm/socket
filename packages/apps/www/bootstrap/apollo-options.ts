import { navigate } from 'gatsby-link';

import * as authTypes from '@somo/pda-redux-auth/src/types';
import { actions as notificationActions } from '@somo/pda-redux-notification/src';
import i18n from '@somo/pda-utils-i18n/src';
import store from '../src/state/store';

const errorHandler = ({ graphQLErrors }) => {
  if (!graphQLErrors) {
    return;
  }

  for (const error of graphQLErrors) {
    switch (error.extensions.code) {
      case 'UNAUTHENTICATED':
        store.dispatch({ type: authTypes.UNAUTHENTICATED });
        navigate('/login');
        break;
      default:
        store.dispatch(
          notificationActions.createNotification(
            i18n.t('errors.httpGenericTitle'),
            error.domain
              ? `${error.domain}: ${i18n.t('errors.httpGenericContent')}`
              : i18n.t('errors.httpGenericContent'),
            error.domain ? error.domain : 'GENERIC',
          ),
        );
        break;
    }
  }
};

export default {
  onError: errorHandler,
};
