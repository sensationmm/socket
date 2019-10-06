import SVG from '@somo/pda-components-svg/src';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import * as Icons from '.';

import * as styles from './story.module.css';

storiesOf('Kitchen Sink|Icons', module).add('default', () => {
  return (
    <div className={styles.page}>
      {Object.values(Icons).map((icon) => (
        <SVG children={icon} size={32} className={styles.svg} />
      ))}
    </div>
  );
});
