import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const initialState = {};

const composeEnhancers = ((window as any) && (window as any).__REDUX_DEVTOOLS_EXTENSION__) || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore);
const store = createStoreWithMiddleware(reducer, initialState);

export default store;
