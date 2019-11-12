import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Component from '.';

storiesOf('Components|emoji', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div style={{ width: '80vw', textAlign: 'center' }}>{story()}</div>)
  .add('Default', () => <Component size={32}>{text('emoji', '🤦')}</Component>);
