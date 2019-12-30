import { storiesOf } from '@storybook/react';
import * as React from 'react';

import AboutPage from '.';
import { IAboutPageProps } from './about.component';

const props: IAboutPageProps = {
  imagery: [
    {
      node: { name: 'office', publicURL: 'https://picsum.photos/id/950/400/300' },
    },
    {
      node: { name: 'reading', publicURL: 'https://picsum.photos/id/951/400/300' },
    },
  ],
};

storiesOf('Pages|about', module).add('default', () => {
  return <AboutPage {...props} />;
});
