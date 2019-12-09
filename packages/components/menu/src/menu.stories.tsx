import { object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Menu from '.';

const menuMock = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

storiesOf('Components|menu', module)
  .addParameters({
    backgrounds: [{ name: 'grey', value: '#333333', default: true }],
  })
  .add('Default', () => <Menu links={object('Menu', menuMock)} />);
