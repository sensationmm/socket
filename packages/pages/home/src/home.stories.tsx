import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Homepage from '@somo/pda-pages-home/src';

storiesOf('Pages|home', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Homepage />;
  });
