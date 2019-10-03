import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Homepage from '@somo/pda-pages-home/src';

const props = {
  i18n: {
    hero: {
      title: 'title',
      subTitle: 'subTitle',
      cta: {
        text: 'CTA',
        url: 'https://site.com',
      },
    },
  },
};

storiesOf('Pages|home', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Homepage {...props} />;
  });
