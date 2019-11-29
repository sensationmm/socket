import { navigate } from 'gatsby-link';

import * as authTypes from '@somo/pda-redux-auth/src/types';
import { actions as notificationActions } from '@somo/pda-redux-notification/src';
import i18n from '@somo/pda-utils-i18n/src';
import { GraphQLError } from 'graphql';
import store from '../src/state/store';

interface IExtendedGraphQLError extends GraphQLError {
  domain?: string;
}

const errorHandler = ({ graphQLErrors }: { graphQLErrors: IExtendedGraphQLError[] }) => {
  if (!graphQLErrors) {
    return;
  }

  for (const error of graphQLErrors) {
    if (error.extensions) {
      if (error.extensions.code === 'UNAUTHENTICATED') {
        store.dispatch({ type: authTypes.UNAUTHENTICATED });
        navigate('/login');
      } else {
        const message = error.domain
          ? `${error.domain}: ${i18n.t('errors.httpGenericContent')}`
          : i18n.t('errors.httpGenericContent');
        const domain = error.domain ? error.domain : 'GENERIC';

        store.dispatch(notificationActions.createNotification(i18n.t('errors.httpGenericTitle'), message, domain));
      }
    } else {
      store.dispatch(notificationActions.createNotification(error.message, i18n.t('errors.httpGeneric'), 'GENERIC'));
    }
  }
};

const onRequest = (operation) => {
  const {
    user: { accessToken, tokenType },
  } = store.getState();

  operation.setContext({
    headers: {
      Authorization: `${tokenType} ${accessToken}`,
    },
  });
};

export default {
  onError: errorHandler,
  request: onRequest,
};
