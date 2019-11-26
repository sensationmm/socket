import { combineReducers } from 'redux';

import { reducers as authReducers } from '@somo/pda-redux-auth/src';
import { reducers as formReducers } from '@somo/pda-redux-form/src';
import { reducers as notificationReducers } from '@somo/pda-redux-notification/src';

const reducer = combineReducers({
  user: authReducers.domain,
  form: formReducers.form,
  notification: notificationReducers.notification,
});

export default reducer;

export type AppState = ReturnType<typeof reducer>;
