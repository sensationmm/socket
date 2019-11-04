import { combineReducers } from 'redux';

import { reducers as authReducers } from '@somo/pda-redux-auth/src';
import { reducers as formReducers } from '@somo/pda-redux-form/src';

const reducer = combineReducers({
  user: authReducers.domain,
  form: formReducers.form,
});

export default reducer;
