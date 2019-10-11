import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Image from './';

storiesOf('Components|image', module)
  .add('Loading image', () => <Image src="https://bit.ly/2RXBzai" i18n={{ noImage: 'Image Unavailable' }} />)
  .add('Failing image', () => <Image src="foo.bar" i18n={{ noImage: 'Image Unavailable' }} />);
