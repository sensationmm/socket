import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from '.';
import { IContentPageProps } from './content.component';

const contentPageKnobs = (): IContentPageProps => ({
  hero: {
    title: text('Hero title', 'Default Template'),
    subTitle: text('Hero subtitle', ''),
    cta: text('CTA', ''),
  },
  subTitle: text('Subtitle', 'Cum sociis natoque penatibus et magnis dis.'),
  body: text(
    'Content body',
    `Purus gravida quis blandit turpis cursus in hac habitasse. Dui ut ornare lectus sit amet est.
    Tincidunt lobortis feugiat vivamus at augue. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. 
    Non blandit massa enim nec dui nunc mattis. Vestibulum lectus mauris ultrices eros in cursus turpis massa.\n\n 
    Sit amet consectetur adipiscing elit ut aliquam purus sit. In nisl nisi scelerisque eu. Eget duis at tellus at 
    urna condimentum mattis pellentesque id. Ut placerat orci nulla pellentesque dignissim. Nulla facilisi nullam 
    vehicula ipsum a arcu. Purus non enim praesent elementum facilisis. Et tortor at risus viverra adipiscing at in tellus. 
    Vel pharetra vel turpis nunc eget. Dui vivamus arcu felis bibendum ut tristique et egestas quis.\n\n
    Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Fringilla phasellus faucibus scelerisque eleifend. 
    Vivamus arcu felis bibendum ut tristique et egestas quis. Orci a scelerisque purus semper eget. 
    Ullamcorper a lacus vestibulum sed arcu non odio. Lobortis mattis aliquam faucibus purus in massa. 
    Amet luctus venenatis lectus magna fringilla urna porttitor. Erat velit scelerisque in dictum non 
    consectetur a erat nam. Leo integer malesuada nunc vel.`,
  ),
});

storiesOf('Pages|content', module).add('default', () => <Component {...contentPageKnobs()} />);
