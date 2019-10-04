import classnames from 'classnames';
import * as React from 'react';

import { Secondary as Button } from '@somo/pda-components-button/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';

// @ts-ignore
import * as styles from './page-hero.module.css';

interface IPageHeroI18N {
  heading: string;
  text?: string | null;
  cta?: string | null;
}

export interface IPageHeroProps {
  i18n: IPageHeroI18N;
  onClick?: () => void;
}

const PageHero: React.FC<IPageHeroProps> = ({ i18n, onClick }) => {
  const { cta, heading, text } = i18n;

  return (
    <div className={classnames(styles.component)}>
      <div className={styles.heading}>
        <Text type={TextStyles.h1} data-test="page-hero-heading">
          {heading}
        </Text>
      </div>

      {text && (
        <div className={styles.text}>
          <Text type={TextStyles.body} data-test="page-hero-text">
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
