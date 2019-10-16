import { action } from '@storybook/addon-actions';
import { object, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Select, { FormSelectType } from '.';

const types = {
  Inline: FormSelectType.Inline,
};

const selectProps = {
  label: '',
  type: select('Type', types, types.Inline),
  onChange: action('onChange'),
  options: object('Options', [{ val: 'opt1', label: 'option 1' }, { val: 'opt2', label: 'option 2' }]),
  defaultOptionText: 'Select option',
  error: '',
  value: '',
};

storiesOf('Form Elements|select', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => <Select {...selectProps} />);
