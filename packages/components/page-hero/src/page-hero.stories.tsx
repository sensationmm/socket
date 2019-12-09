import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import PageHero from '.';

storiesOf('Components|page-hero', module)
  .addParameters({
    backgrounds: [{ name: 'grey', value: '#333333', default: true }],
  })
  .add('Default', () => (
    <PageHero
      heading={text('Heading', 'Heading')}
      text={text('Text', 'Text goes here text goes here text goes here text goes here')}
      cta={text('CTA', 'Click here')}
      onClick={action('onClick')}
    />
  ));
