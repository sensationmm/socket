import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import * as React from 'react';
import Ring, { RingStyles } from './ring.component';

const Styles = {
  Default: RingStyles.Default,
  Primary: RingStyles.Primary,
};

storiesOf('Components|ring', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Ring children={text('children', '1')} style={select('style', Styles, Styles.Default)} />);
