import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import GutterLayout from '.';

const styles = {
  backgroundColor: '#666',
  color: 'white',
  padding: '10px',
  width: '200px',
  height: '80px',
};

storiesOf('Layout Elements|gutter-layout', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('Default', () => (
    <div style={{ backgroundColor: '#ffd1d1' }}>
      <GutterLayout>
        <div style={styles}>FIRST</div>
        <div style={styles}>SECOND</div>
        <div style={styles}>THIRD</div>
        <div style={styles}>LAST</div>
      </GutterLayout>
    </div>
  ));
