import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import PhotoCard, { PhotoCardStyle } from '.';

const PhotoCardTypes = {
  Default: PhotoCardStyle.Default,
  Primary: PhotoCardStyle.Primary,
  Secondary: PhotoCardStyle.Secondary,
};

storiesOf('Components|photo-card', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '50vw' }}>{story()}</div>)
  .add('Default', () => (
    <PhotoCard
      style={select('Style', PhotoCardTypes, PhotoCardStyle.Default)}
      image="https://picsum.photos/id/379/400/300"
      text="Our boffins getting their heads together to plan how we build your next idea -  keep your eyes peeled for updates"
    />
  ));
