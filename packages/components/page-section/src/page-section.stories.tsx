import { files, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import PageSection from '.';
import { PageSectionStyle } from './page-section.component';

const PageSectionTypes = {
  Default: PageSectionStyle.Default,
  Primary: PageSectionStyle.Primary,
  PrimaryPattern: PageSectionStyle.PrimaryPattern,
  Secondary: PageSectionStyle.Secondary,
  Image: PageSectionStyle.Image,
};

storiesOf('Components|page-section', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('Default', () => (
    <PageSection
      style={select('Style', PageSectionTypes, PageSectionStyle.Default)}
      bgImage={files('Background Image (for Image style)', '.jpg, .svg, .gif, .png')}
    >
      {text('Content', 'This is my content')}
    </PageSection>
  ));
