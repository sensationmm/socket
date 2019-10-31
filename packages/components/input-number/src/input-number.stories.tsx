import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

storiesOf('Form Elements|InputNumber', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <Component
      id={'input-number'}
      label={text('label', 'Some field')}
      placeholder={text('placeholder', 'Enter value...')}
      readOnly={boolean('readOnly', false)}
      min={number('Min Value', 0)}
      max={number('Max Value', 0)}
      note={text('note', '')}
      error={text('error', '')}
      hidden={boolean('hidden', false)}
      onChange={action('onChange()')}
      onKeyPress={action('onKeyPress()')}
      onFocus={action('onFocus()')}
    />
  ));
