import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { AvatarSizes } from '@somo/oxd-components-avatar/src';
import ArticleAuthor from '.';

const Sizes = {
  Small: AvatarSizes.Small,
  Medium: AvatarSizes.Medium,
};

storiesOf('Components|article-author', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '80vw', backgroundColor: '#007672', padding: '20px' }}>{story()}</div>)
  .add('Default', () => (
    <ArticleAuthor
      name={text('Name', 'John Smith')}
      avatar={text('picture', 'https://picsum.photos/id/287/100/100')}
      date="2019-09-07T15:53:00+05:00"
      avatarSize={select('Size', Sizes, AvatarSizes.Small)}
      isAvatarResponsive={boolean('isAvatarResponsive', false)}
    />
  ));
