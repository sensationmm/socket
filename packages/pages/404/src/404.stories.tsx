import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from '.';

const props = {
  i18n: {
    footer: {
      title: 'Our smart technology needs a smart meter.',
      subTitle: "Check you're on the latest smart meter and start taking control your energy.",
      copyright: '2019 © Socket Energy. All rights reserved.',
    },
    fourOhFour: {
      hero: {
        title: 'Take control. Own your energy.',
      },
      body: 'Some text string',
    },
  },
};

storiesOf('Pages|404', module).add('default', () => {
  return <Component {...props} />;
});
