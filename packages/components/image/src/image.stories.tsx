import { boolean, object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Image from '.';

storiesOf('Components|image', module)
  .addDecorator(withKnobs)
  .add('Loading image', () => {
    return (
      <Image
        src="https://bit.ly/2RXBzai"
        i18n={object('i18n', { noImage: 'Image Unavailable' })}
        isLazy={boolean('isLazy', false)}
        isCMSContent={boolean('isCMSContent', false)}
      />
    );
  })
  .add('Failing image', () => {
    return (
      <Image
        src="foo.bar"
        i18n={object('i18n', { noImage: 'Image Unavailable' })}
        isLazy={boolean('isLazy', false)}
        isCMSContent={boolean('isCMSContent', false)}
      />
    );
  });
