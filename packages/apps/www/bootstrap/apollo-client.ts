import ApolloClient, { PresetConfig } from 'apollo-boost';
import { Operation } from 'apollo-link';
import { ErrorLink } from 'apollo-link-error';
import { navigate } from 'gatsby-link';
import { GraphQLError } from 'graphql';
import fetch from 'isomorphic-fetch';
import { Store } from 'redux';

import * as authTypes from '@somo/pda-redux-auth/src/types';
import { actions as notificationActions } from '@somo/pda-redux-notification/src';
import i18n from '@somo/pda-utils-i18n/src';

interface IExtendedGraphQLError extends GraphQLError {
  domain?: string;
}

export const CreateApolloClient = (store: Store, options: PresetConfig = {}): ApolloClient<PresetConfig> => {
  const errorHandler: ErrorLink.ErrorHandler = ({ graphQLErrors }) => {
    if (!graphQLErrors) {
      return;
    }

    for (const error of graphQLErrors as IExtendedGraphQLError[]) {
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

  const onRequest = (operation: Operation) => {
    const {
      user: { accessToken, tokenType },
    } = store.getState();

    operation.setContext({
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
      },
    });
  };

  return new ApolloClient({
    uri: process.env.GRAPHQL_BASE_URL,
    fetch,
    onError: errorHandler,
    request: onRequest,
    ...options,
  });
};
