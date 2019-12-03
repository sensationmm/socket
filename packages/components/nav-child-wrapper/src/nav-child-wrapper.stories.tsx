import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import NavChildWrapper, { ChildPosition } from '.';

const position = [ChildPosition.Left, ChildPosition.Center, ChildPosition.Right];

storiesOf('Components|nav-child-wrapper', module)
  .addDecorator(withKnobs())
  .add('Default', () => (
    <NavChildWrapper label={text('label', 'label')} position={select('position', position, ChildPosition.Center)}>
      Child content
    </NavChildWrapper>
  ));
