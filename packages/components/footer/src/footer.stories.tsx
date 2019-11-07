import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Footer from '.';

const menuMock = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

storiesOf('Components|footer', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addParameters({
    backgrounds: [{ name: 'grey', value: '#333333', default: true }],
  })
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <div style={{ width: '800px' }}>
      <Footer menu={object('Menu', menuMock)} />
    </div>
  ));
