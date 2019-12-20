import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Image from '@somo/pda-components-image/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';

import Component from './index';

storiesOf('Components|text-image', module)
  .addDecorator((story) => <div style={{ width: '40vw' }}>{story()}</div>)
  .add('Default', () => (
    <Component
      reverse={boolean('reverse', false)}
      text={
        <div>
          <Text element="h2" type={TextStyles.h2}>
            {text('text (title)', 'Title here')}
          </Text>
          <Text element="p" type={TextStyles.body}>
            {text(
              'text (body)',
              'Text goes here text goes here text goes here text goes here text goes here text goes here text goes here.',
            )}
          </Text>
        </div>
      }
      image={<Image src={'https://bit.ly/2RXBzai'} />}
    />
  ));
