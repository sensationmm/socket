import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import EnergyPage from '@somo/pda-pages-energy/src';

storiesOf('Pages|energy', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <EnergyPage />;
  });
