import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { AppState } from '@somo/pda-apps-www/src/state/reducer';
import Tpl from '@somo/pda-components-app-template/src';
import { initialState as authState } from '@somo/pda-redux-auth/src/reducers/domain';
import { initialState as formState } from '@somo/pda-redux-form/src/reducers';
import { initialState as notificationState } from '@somo/pda-redux-notification/src/reducers';
import i18n from '@somo/pda-utils-i18n/src';

const mockStore = configureMockStore();

const initialState: AppState = {
  user: authState,
  form: formState,
  notification: notificationState,
};

export default (story) => (
  <I18nextProvider i18n={i18n}>
    <Provider store={mockStore(initialState)}>
      <Tpl hideCookieNotice={true}>{story()}</Tpl>
    </Provider>
  </I18nextProvider>
);
