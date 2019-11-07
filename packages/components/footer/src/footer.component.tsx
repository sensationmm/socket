import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Round as RoundButton } from '@somo/pda-components-button/src';
import { Facebook, Instagram, Twitter } from '@somo/pda-components-icons/src';
import Menu, { IMenuProps } from '@somo/pda-components-menu/src';
import SVG from '@somo/pda-components-svg/src';

import * as styles from './footer.module.css';

export interface IFooterProps {
  menu?: IMenuProps['links'];
}

const Footer: React.FC<IFooterProps> = ({ menu }) => {
  const [t] = useTranslation();

  return (
    <div className={styles.component}>
      <div className={styles.social}>
        <RoundButton aria-label="Socket on Facebook">
          <SVG children={Facebook} size={'20px'} className={styles.socialIcon} />
        </RoundButton>
        <RoundButton aria-label="Socket on Twitter">
          <SVG children={Twitter} size={'20px'} className={styles.socialIcon} />
        </RoundButton>
        <RoundButton aria-label="Socket on Instagram">
          <SVG children={Instagram} size={'20px'} className={styles.socialIcon} />
        </RoundButton>
      </div>

      <div className={styles.copyright}>{t('site.footer.copyright')}</div>

      {menu && <Menu links={menu} />}
    </div>
  );
};

export default Footer;
