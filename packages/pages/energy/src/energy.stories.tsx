import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import EnergyPage from '@somo/pda-pages-energy/src';

const props = {
  imagery: [
    {
      node: { name: 'office', publicURL: 'https://picsum.photos/id/950/400/300' },
    },
    {
      node: { name: 'reading', publicURL: 'https://picsum.photos/id/951/400/300' },
    },
  ],
};

storiesOf('Pages|energy', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <EnergyPage {...props} />;
  });
