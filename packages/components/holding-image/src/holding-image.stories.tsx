import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import HoldingImage from './';

storiesOf('Components|holding-image', module).add('Holding', () => (
  <HoldingImage text={text('Image Text', 'No Image Available')} />
));
