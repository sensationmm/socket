import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ContentBoxStyle } from '@somo/pda-components-content-box/src';
import StepCard from '.';

const ContentBoxTypes = {
  SecondaryPattern: ContentBoxStyle.SecondaryPattern,
  TertiaryPattern: ContentBoxStyle.TertiaryPattern,
};

storiesOf('Components|step-card', module)
  .addDecorator((story) => <div style={{ width: '50vw', height: '300px' }}>{story()}</div>)
  .add('with Text', () => (
    <StepCard
      header="First step"
      body="Check if you've got the right smart meter to join our club"
      style={ContentBoxTypes.SecondaryPattern}
    />
  ))
  .add('with CTA', () => (
    <StepCard
      cta="Put me in control"
      style={ContentBoxTypes.TertiaryPattern}
      isVerticallyCentered={true}
      isHorizontallyCentered={true}
    />
  ));
