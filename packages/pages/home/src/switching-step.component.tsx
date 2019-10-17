import * as React from 'react';

import { Outline as OutlineButton } from '@somo/pda-components-button/src';
import ContentBox, { ContentBoxStyle } from '@somo/pda-components-content-box/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './home.module.css';

interface IHomePageSwitchingStepProps extends EON.IHomepageSwitchingStep {
  style: ContentBoxStyle;
  isVerticallyCentered?: boolean;
  isHorizontallyCentered?: boolean;
}

export const SwitchingStep = ({
  header,
  body,
  cta,
  style,
  isVerticallyCentered,
  isHorizontallyCentered,
}: IHomePageSwitchingStepProps) => (
  <div className={styles.switchingStepsCard}>
    <ContentBox
      style={style}
      height="100%"
      isVerticallyCentered={isVerticallyCentered}
      isHorizontallyCentered={isHorizontallyCentered}
    >
      {header && (
        <Text
          element="h3"
          className={styles.switchingStepsCardHeader}
          type={TextStyles.h2}
          color={ColorStyles.secondary}
        >
          {header}
        </Text>
      )}
      {body && (
        <Text element="p" type={TextStyles.body} color={ColorStyles.secondary}>
          {body}
        </Text>
      )}
      {cta && <OutlineButton size="mini">{cta}</OutlineButton>}
    </ContentBox>
  </div>
);

export default SwitchingStep;
