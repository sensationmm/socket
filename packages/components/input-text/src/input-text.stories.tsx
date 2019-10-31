import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';

storiesOf('Form Elements|InputText', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <Component
      id={'input-text'}
      label={text('label', 'Some field')}
      placeholder={text('placeholder', 'Enter value...')}
      value={''}
      readOnly={boolean('readOnly', false)}
      note={text('note', '')}
      error={text('error', '')}
      hidden={boolean('hidden', false)}
      onChange={action('onChange()')}
      onKeyPress={action('onKeyPress()')}
      onFocus={action('onFocus()')}
    />
  ));
