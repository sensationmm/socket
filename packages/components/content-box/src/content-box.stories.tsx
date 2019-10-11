import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import ContentBox, { ContentBoxStyle } from '.';

const ContentBoxTypes = {
  Default: ContentBoxStyle.Default,
  Primary: ContentBoxStyle.Primary,
  PrimaryPattern: ContentBoxStyle.PrimaryPattern,
  Secondary: ContentBoxStyle.Secondary,
  SecondaryPattern: ContentBoxStyle.SecondaryPattern,
  Tertiary: ContentBoxStyle.Tertiary,
  TertiaryPattern: ContentBoxStyle.TertiaryPattern,
};

const ContentBoxHeights = {
  Auto: 'auto',
  '300': 300,
};

storiesOf('Components|content-box', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <ContentBox
      style={select('Style', ContentBoxTypes, ContentBoxStyle.Default)}
      height={select('Height', ContentBoxHeights, 'auto')}
      isVerticallyCentered={boolean('Center vertically', false)}
      isHorizontallyCentered={boolean('Center horizontally', false)}
    >
      <div>This is my first line of content</div>
      <div>This is my second line of content</div>
      <div>This is my third line of content</div>
    </ContentBox>
  ));
