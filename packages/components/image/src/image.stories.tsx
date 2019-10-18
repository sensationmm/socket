import { boolean, object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Image from '.';

const props = {
  i18n: object('i18n', { noImage: 'Image Unavailable' }),
  isLazy: boolean('isLazy', false),
};

storiesOf('Components|image', module)
  .addDecorator(withKnobs)
  .add('Loading image', () => <Image src="https://bit.ly/2RXBzai" {...props} />)
  .add('Failing image', () => <Image src="foo.bar" {...props} />);
