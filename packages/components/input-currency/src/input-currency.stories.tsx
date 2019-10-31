import { action } from '@storybook/addon-actions';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

storiesOf('Form Elements|InputCurrency', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <Component
      id={'input-currency'}
      label={text('label', 'Some field')}
      placeholder={text('placeholder', 'Enter value...')}
      value={number('value', 0)}
      readOnly={true}
      note={text('note', '')}
      error={text('error', '')}
      onChange={action('onChange')}
    />
  ));
