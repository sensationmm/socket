import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from '.';

const props = {
  i18n: {
    hero: {
      title: 'Take control. Own your energy.',
    },
    body: 'Some text string',
  },
};

storiesOf('Pages|404', module).add('default', () => {
  return <Component {...props} />;
});
