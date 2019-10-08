import * as React from 'react';

import { Round as RoundButton } from '@somo/pda-components-button/src';
import { Facebook, Instagram, Twitter } from '@somo/pda-components-icons/src';
import Menu, { IMenuProps } from '@somo/pda-components-menu/src';
import SVG from '@somo/pda-components-svg/src';

// @ts-ignore
import * as styles from './footer.module.css';

export interface IFooterProps {
  i18n: EON.IWebAppTranslations['homepage']['footer'];
  menu?: IMenuProps['links'];
}

const Footer: React.FC<IFooterProps> = ({ i18n, menu }) => {
  const { copyright } = i18n;

  return (
    <div className={styles.component}>
      {/* <Text element="h3" type={TextStyles.h2} color={ColorStyles.secondary}>
        {title}
      </Text>
      <Text element="p" type={TextStyles.segmentCopy} color={ColorStyles.secondary}>
        {subTitle}
      </Text> */}
      <div className={styles.social}>
        <RoundButton>
          <SVG children={Facebook} size={'20px'} className={styles.socialIcon} />
        </RoundButton>
        <RoundButton>
          <SVG children={Twitter} size={'20px'} className={styles.socialIcon} />
        </RoundButton>
        <RoundButton>
          <SVG children={Instagram} size={'20px'} className={styles.socialIcon} />
        </RoundButton>
      </div>

      <div className={styles.copyright}>{copyright}</div>

      {menu && <Menu links={menu} />}
    </div>
  );
};

export default Footer;
