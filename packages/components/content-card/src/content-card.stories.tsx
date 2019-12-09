import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { RingStyles } from '@somo/pda-components-ring/src';
import ContentCard from '.';

const Styles = {
  Default: RingStyles.Default,
  Primary: RingStyles.Primary,
};

storiesOf('Components|content-card', module)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => {
    return (
      <ContentCard
        ringStyle={select('ringStyle', Styles, Styles.Default)}
        header={text('header', 'Smart Only')}
        body={text('body', 'With us you need a smart meter')}
      />
    );
  })
  .add('with Emoji', () => {
    return (
      <ContentCard
        emoji={text('emoji', '🌎')}
        ringStyle={select('ringStyle', Styles, Styles.Default)}
        header={text('header', 'Smart Only')}
        body={text('body', 'With us you need a smart meter')}
      />
    );
  });
