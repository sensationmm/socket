import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import ContentCard from '.';

const contentCardMock = object('Content', {
  icon: 'smiley',
  header: 'Smart Only',
  body: "With us you need a smart meter, say bye to the spider in the cupboard - we're digital all the way!",
});

storiesOf('Components|content-card', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => <ContentCard {...contentCardMock} />);
