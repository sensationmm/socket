import classnames from 'classnames';
import * as React from 'react';

// @ts-ignore
import * as styles from './page-hero.module.css';

import { Primary as Button } from '@somo/pda-components-button/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';

export interface IPageHeroProps {
  heading: string;
  text?: string | null;
  cta?: string | null;
  onClick?: () => void;
}

const PageHero: React.FC<IPageHeroProps> = ({ cta, heading, onClick, text }) => (
  <div className={classnames(styles.component)}>
    <div className={styles.heading}>
      <Text type={TextStyles.pageTitle} data-test="page-hero-heading">
        {heading}
      </Text>
    </div>

    {text && (
      <div className={styles.text}>
        <Text type={TextStyles.pageAbout} data-test="page-hero-text">
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

export default PageHero;
