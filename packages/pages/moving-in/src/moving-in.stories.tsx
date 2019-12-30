import { storiesOf } from '@storybook/react';
import * as React from 'react';

import MovingIn from '.';
import { IMovingInPageProps } from './moving-in.component';

const props: IMovingInPageProps = {
  imagery: [
    {
      node: { name: 'energy-use-desktop', publicURL: 'https://picsum.photos/id/950/300/400' },
    },
  ],
};

storiesOf('Pages|moving in', module)
  .addDecorator((story) => <div style={{ width: '90vw' }}>{story()}</div>)
  .add('default', () => {
    return <MovingIn {...props} />;
  });
