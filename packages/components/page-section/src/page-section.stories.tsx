import { files, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import PageSection, { PageSectionStyle } from '.';

const PageSectionTypes = {
  Default: PageSectionStyle.Default,
  Primary: PageSectionStyle.Primary,
  PrimaryPattern: PageSectionStyle.PrimaryPattern,
  Secondary: PageSectionStyle.Secondary,
  Image: PageSectionStyle.Image,
};

const elements = ['div', 'section'];

storiesOf('Layout Elements|page-section', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('Default', () => (
    <div style={{ width: '800px' }}>
      <PageSection
        element={select('Element', elements, 'div')}
        style={select('Style', PageSectionTypes, PageSectionStyle.Default)}
        bgImage={files('Background Image (for Image style)', '.jpg, .svg, .gif, .png')}
      >
        {text('Content', 'This is my content')}
      </PageSection>
    </div>
  ));
