import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import People from '.';

storiesOf('Components|people', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '50vw' }}>{story()}</div>)
  .add('Default', () => (
    <People
      title="We are real people"
      list={[
        {
          text: 'Our boffins getting their heads together to plan how we build your next idea.',
          image: 'https://picsum.photos/id/950/400/300',
        },
        {
          text: 'Keep your eyes peeled for updates.',
          image: 'https://picsum.photos/id/951/400/300',
        },
      ]}
      cta="Follow us"
    />
  ));
