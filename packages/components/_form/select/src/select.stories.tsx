import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Select, { FormSelectType } from '.';

const selectProps = {
  label: '',
  type: FormSelectType.Inline,
  onChange: action('onChange'),
  options: [{ val: 'opt1', label: 'option 1' }, { val: 'opt2', label: 'option 2' }],
  defaultOptionText: 'Select option',
  error: '',
  value: '',
};

storiesOf('Form Elements|select', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => <Select {...selectProps} />);
