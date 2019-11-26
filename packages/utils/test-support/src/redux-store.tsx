import { reducers as notificationReducers } from '@somo/pda-redux-notification/src';
import { combineReducers, createStore } from 'redux';

const initialState = {
  user: {},
  notification: notificationReducers.initialState,
};

export const createReduxStore = (reducerKeys: string[] = [], state = {}) =>
  createStore(
    combineReducers<{}>({
      user: () => initialState.user,
      notification: () => initialState.notification,
      ...reducerKeys.reduce(
        (accum, key) => ({
          ...accum,
          [key]: () => ({}),
        }),
        {},
      ),
    }),
    { ...initialState, ...state },
  );

export default createReduxStore();
