import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from '.';
import { IRegisterProps } from './register.component';

const props: IRegisterProps = {
  form: {
    values: { test: '' },
    errors: { test: '' },
    valid: { test: '' },
    showErrorMessage: true,
  },
};
storiesOf('Pages|register', module).add('default', () => {
  return <Component {...props} />;
});
