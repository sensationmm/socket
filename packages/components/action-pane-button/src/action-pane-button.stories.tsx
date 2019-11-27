import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import ActionPaneBtn, { IconTypes } from '.';

const BtnIconTypes = {
  Default: IconTypes.default,
  Edit: IconTypes.edit,
};

storiesOf('Components|action-pane-button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ActionPaneBtn icon={select('Icon', BtnIconTypes, BtnIconTypes.Default)} text={text('Text', 'Edit')} />
  ));
