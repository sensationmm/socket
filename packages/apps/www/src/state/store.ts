import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const initialState = {};

const windowGlobal = typeof window !== 'undefined' && window;

const devtools =
  process.env.NODE_ENV === 'development' && (windowGlobal as any).devToolsExtension
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    devtools,
  ),
);

export default store;
