import { action } from '@storybook/addon-actions';
import { object, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Select, { FormSelectType } from '.';

const types = {
  Inline: FormSelectType.Inline,
};

storiesOf('Form Elements|select', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => {
    return (
      <Select
        label={''}
        type={select('Type', types, types.Inline)}
        onChange={action('onChange')}
        options={object('Options', [
          { val: 'opt1', label: 'option 1' },
          { val: 'opt2', label: 'option 2' },
          { val: 'opt3', label: 'option 3' },
        ])}
        defaultOptionText={text('Placeholder', 'Select option')}
        error={''}
        value={select('Value', ['option 1', 'option 2', 'option 3'], undefined)}
      />
    );
  });
