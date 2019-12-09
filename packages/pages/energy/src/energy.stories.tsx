import { storiesOf } from '@storybook/react';
import * as React from 'react';

import EnergyPage from '@somo/pda-pages-energy/src';

storiesOf('Pages|energy', module).add('default', () => {
  return <EnergyPage />;
});
