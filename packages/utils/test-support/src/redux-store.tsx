import { combineReducers, createStore } from 'redux';

const initialState = {
  user: {},
};

export const createReduxStore = (reducerKeys: string[] = [], state = {}) =>
  createStore(
    combineReducers<{}>({
      user: () => initialState.user,
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
