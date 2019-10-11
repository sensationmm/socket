import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Avatar from '.';

storiesOf('Components|avatar', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Avatar
      picture={text('picture', 'https://picsum.photos/id/287/100/100')}
      alt={text('alt', '')}
      isSmall={boolean('isSmall', false)}
      additionalClass={text('additionalClass', '')}
    />
  ));
