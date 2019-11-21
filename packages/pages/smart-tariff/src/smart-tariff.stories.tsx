import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import SmartTariffPage from '@somo/pda-pages-smart-tariff/src';

const props = {
  imagery: [
    {
      node: { name: 'pie-chart', publicURL: 'https://picsum.photos/id/950/300/400' },
    },
  ],
};

storiesOf('Pages|smart-tariff', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <SmartTariffPage {...props} />;
  });
