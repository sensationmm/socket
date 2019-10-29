import { combineReducers } from 'redux';

import { reducers as authReducers } from '@somo/pda-redux-auth/src';

const reducer = combineReducers({
  user: authReducers.domain,
});

export default reducer;
