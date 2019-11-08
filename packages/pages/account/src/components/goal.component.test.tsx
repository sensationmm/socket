import { render } from '@testing-library/react';
import React from 'react';

import i18n, { en } from '@somo/pda-utils-i18n/src';
import { I18nextProvider } from 'react-i18next';
import Goal from './goal.component';

const renderComponent = (props?) =>
  render(
    <I18nextProvider i18n={i18n}>
      <Goal {...props} />
    </I18nextProvider>,
  );

describe('Goal component', () => {
  it('should render', () => {
    const { getByText } = renderComponent();

    getByText(en.site.account.goal.title);
    getByText(en.site.account.goal.subTitle);
    getByText(en.site.account.goal.content);
  });
});
