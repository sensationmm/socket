import { object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { IMenuProps } from '@somo/pda-components-menu/src';
import Navbar from '.';

const menuMock: IMenuProps['links'] = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

storiesOf('Components|navbar', module)
  .addParameters({
    backgrounds: [{ name: 'grey', value: '#333333', default: true }],
  })
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => <Navbar menu={object('Menu', menuMock)} />);
