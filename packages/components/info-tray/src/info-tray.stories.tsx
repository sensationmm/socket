import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import InfoTray from './index';

storiesOf('Components|info-tray', module)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <InfoTray closedText={text('Closed label', 'SHOW INFO')} openedText={text('Opened label', 'HIDE INFO')}>
      <div style={{ padding: '30px' }}>
        <Text element={'p'} type={TextStyles.body} color={ColorStyles.tertiary}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam quas natus aliquid expedita consectetur
          porro sed harum saepe repellendus soluta maxime beatae nostrum velit, maiores architecto a alias dolore?
        </Text>
        <Text element={'p'} type={TextStyles.body} color={ColorStyles.tertiary}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus ea optio ratione ex
          praesentium asperiores nihil blanditiis dignissimos neque dolor harum, ipsa quasi expedita quas exercitationem
          aspernatur, sint architecto?
        </Text>
        <Text element={'p'} type={TextStyles.body} color={ColorStyles.tertiary}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error vel explicabo atque autem
          reprehenderit libero iure deserunt quibusdam, iste eos ad deleniti molestiae, quasi, incidunt perferendis ipsa
          praesentium ipsam.
        </Text>
      </div>
    </InfoTray>
  ))
  .add('Open', () => (
    <InfoTray closedText={text('Closed label', 'SHOW INFO')} openedText={text('Opened label', 'HIDE INFO')} open={true}>
      <div style={{ padding: '30px' }}>
        <Text element={'p'} type={TextStyles.body} color={ColorStyles.tertiary}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam quas natus aliquid expedita consectetur
          porro sed harum saepe repellendus soluta maxime beatae nostrum velit, maiores architecto a alias dolore?
        </Text>
        <Text element={'p'} type={TextStyles.body} color={ColorStyles.tertiary}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus ea optio ratione ex
          praesentium asperiores nihil blanditiis dignissimos neque dolor harum, ipsa quasi expedita quas exercitationem
          aspernatur, sint architecto?
        </Text>
        <Text element={'p'} type={TextStyles.body} color={ColorStyles.tertiary}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error vel explicabo atque autem
          reprehenderit libero iure deserunt quibusdam, iste eos ad deleniti molestiae, quasi, incidunt perferendis ipsa
          praesentium ipsam.
        </Text>
      </div>
    </InfoTray>
  ));
