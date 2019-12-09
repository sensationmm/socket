import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import * as React from 'react';
import Share from '.';

storiesOf('Components|share', module).add('Default', () => (
  <Share
    header={text('header', 'Share this post')}
    articleTitle={text('articleTitle', 'Article title')}
    articleLink={text('articleLink', 'https://www.eon.com')}
  />
));
