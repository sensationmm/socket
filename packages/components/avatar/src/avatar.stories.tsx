import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Avatar, { AvatarSizes, AvatarStyles, SvgTypes } from '.';

const Sizes = {
  Small: AvatarSizes.Small,
  Medium: AvatarSizes.Medium,
  Large: AvatarSizes.Large,
};

const Styles = {
  Primary: AvatarStyles.Primary,
  Secondary: AvatarStyles.Secondary,
};

const AvatarSvgTypes = {
  Profile: SvgTypes.Profile,
  Logo: SvgTypes.Logo,
};

storiesOf('Components|avatar', module)
  .add('default', () => (
    <Avatar
      size={select('Size', Sizes, AvatarSizes.Small)}
      style={select('Style', Styles, AvatarStyles.Primary)}
      svgType={select('SVG Type', AvatarSvgTypes, SvgTypes.Profile)}
      isResponsive={boolean('isResponsive', false)}
      additionalClass={text('additionalClass', '')}
    />
  ))
  .add('withImage', () => (
    <Avatar
      picture={text('picture', 'https://picsum.photos/id/287/100/100')}
      alt={text('alt', '')}
      size={select('Size', AvatarSizes, AvatarSizes.Small)}
      isResponsive={boolean('isResponsive', false)}
      additionalClass={text('additionalClass', '')}
    />
  ));
