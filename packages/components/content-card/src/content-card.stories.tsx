import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import ContentCard from '.';

storiesOf('Components|content-card', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => {
    return (
      <ContentCard
        icon={text('icon', 'smiley')}
        header={text('header', 'Smart Only')}
        body={text('body', 'With us you need a smart meter')}
      />
    );
  });
