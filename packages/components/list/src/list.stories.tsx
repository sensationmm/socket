import { boolean, object, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ColorStyles } from '@somo/pda-components-text/src';
import Component from './';

const content = [
  'Set goals for how much you spend',
  'Regular tips from our boffins to help you save',
  'Easily check and compare your history',
  'See forecasts based on what you use',
];

const color = [ColorStyles.secondary, ColorStyles.tertiary];

storiesOf('Components|list', module)
  .addDecorator((story) => <div style={{ width: '80vw', backgroundColor: '#007672', padding: '20px' }}>{story()}</div>)
  .add('Default', () => (
    <Component
      listContent={object('listContent', content)}
      textColor={select('textColor', color, ColorStyles.secondary)}
      isCMSContent={boolean('isCMSContent', false)}
    />
  ));
