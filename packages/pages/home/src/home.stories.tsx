import { storiesOf } from '@storybook/react';
import * as React from 'react';

import HomePage from '@somo/pda-pages-home/src';

const props = {
  imagery: [
    {
      node: { name: 'energy-pie', publicURL: 'https://picsum.photos/id/950/300/400' },
    },
  ],
};

storiesOf('Pages|home', module).add('default', () => {
  return <HomePage {...props} />;
});
