import cx from 'classnames';
import * as React from 'react';

import { Secondary as Button } from '@somo/pda-components-button/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './page-hero.module.css';

export interface IPageHeroProps {
  heading: string;
  text?: string | null;
  cta?: string | null;
  className?: string;
  onClick?: () => void;
}

const PageHero: React.FC<IPageHeroProps> = ({ heading, text, cta, className, onClick }) => {
  return (
    <div className={cx(styles.component, className)}>
      <div className={styles.heading}>
        <Text type={TextStyles.h1} color={ColorStyles.secondary} data-test="page-hero-heading">
          {heading}
        </Text>
      </div>

      {text && (
        <div className={styles.text}>
          <Text type={TextStyles.body} color={ColorStyles.secondary} data-test="page-hero-text">
            {text}
          </Text>
        </div>
      )}

      {cta && onClick && (
        <div className={styles.cta}>
          <Button children={cta} onClick={onClick} />
        </div>
      )}
    </div>
  );
};

export default PageHero;
