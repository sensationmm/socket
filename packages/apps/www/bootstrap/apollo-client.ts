import { GraphQLError } from 'graphql';
import fetch from 'isomorphic-fetch';
import { Store } from 'redux';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { createHttpLink } from 'apollo-link-http';

import * as authTypes from '@somo/pda-redux-auth/src/types';
import { actions as notificationActions } from '@somo/pda-redux-notification/src';
import i18n from '@somo/pda-utils-i18n/src';

interface IExtendedGraphQLError extends GraphQLError {
  domain?: string;
}

export default (store: Store) => {
  const errorLink = onError(({ graphQLErrors }) => {
    if (!graphQLErrors) {
      return;
    }

    for (const error of graphQLErrors as IExtendedGraphQLError[]) {
      if (error.extensions) {
        if (error.extensions.code === 'UNAUTHENTICATED') {
          store.dispatch({ type: authTypes.UNAUTHENTICATED });
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
  });

  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_BASE_URL,
    fetch,
  });

  const authLink = setContext((_, { headers }) => {
    const {
      user: { socketAuthentication },
    } = store.getState();

    return {
      headers: {
        ...headers,
        Authorization: socketAuthentication ? `Bearer ${socketAuthentication}` : '',
      },
    };
  });

  const link = ApolloLink.from([authLink, errorLink, httpLink]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};
