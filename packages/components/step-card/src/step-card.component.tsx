import * as React from 'react';

import { Tertiary as TertiaryButton } from '@somo/pda-components-button/src';
import ContentBox, { ContentBoxStyle } from '@somo/pda-components-content-box/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './step-card.module.css';

interface IStepCardProps {
  header?: string;
  body?: string;
  cta?: string;
  style: ContentBoxStyle;
  isVerticallyCentered?: boolean;
  isHorizontallyCentered?: boolean;
}

export const StepCard = ({
  header,
  body,
  cta,
  style,
  isVerticallyCentered,
  isHorizontallyCentered,
}: IStepCardProps) => (
  <div className={styles.stepCard}>
    <ContentBox
      style={style}
      height="100%"
      isVerticallyCentered={isVerticallyCentered}
      isHorizontallyCentered={isHorizontallyCentered}
    >
      {header && (
        <Text element="h3" className={styles.header} type={TextStyles.h2} color={ColorStyles.secondary}>
          {header}
        </Text>
      )}
      {body && (
        <Text element="p" type={TextStyles.body} color={ColorStyles.secondary}>
          {body}
        </Text>
      )}
      {cta && <TertiaryButton size="mini">{cta}</TertiaryButton>}
    </ContentBox>
  </div>
);

export default StepCard;
