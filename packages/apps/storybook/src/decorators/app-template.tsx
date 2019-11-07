import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import Tpl from '@somo/pda-components-app-template/src';
import i18n from '@somo/pda-utils-i18n/src';

export default (story) => (
  <I18nextProvider i18n={i18n}>
    <Tpl>{story()}</Tpl>
  </I18nextProvider>
);
