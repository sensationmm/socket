import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Round as RoundButton } from '@somo/pda-components-button/src';
import FooterMenu, { IMenuProps } from '@somo/pda-components-footer-menu/src';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@somo/pda-components-icons/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import SVG from '@somo/pda-components-svg/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './footer.module.css';

export interface IFooterProps {
  menu?: IMenuProps['links'];
}

const Footer: React.FC<IFooterProps> = ({ menu }) => {
  const [t] = useTranslation();

  return (
    <footer className={styles.footer}>
      <PageSection style={PageSectionStyle.Quinary}>
        <Text className={styles.title} type={TextStyles.h2} color={ColorStyles.quaternary} element="p">
          {t('site.footer.title')}
        </Text>
        <Text className={styles.subtitle} type={TextStyles.segmentCopy} color={ColorStyles.secondary} element="p">
          {t('site.footer.subTitle')}
        </Text>
        <div className={styles.social}>
          <a href="https://www.facebook.com/socketenergy1" target="_blank">
            <RoundButton aria-label="Socket on Facebook">
              <SVG children={Facebook} size={'20px'} className={styles.socialIcon} />
            </RoundButton>
          </a>
          <a href="https://twitter.com/SocketEnergy" target="_blank">
            <RoundButton aria-label="Socket on Twitter">
              <SVG children={Twitter} size={'20px'} className={styles.socialIcon} />
            </RoundButton>
          </a>
          <a href="https://www.instagram.com/socketgram" target="_blank">
            <RoundButton aria-label="Socket on Instagram">
              <SVG children={Instagram} size={'20px'} className={styles.socialIcon} />
            </RoundButton>
          </a>
          <a href="https://www.linkedin.com/company/20151244" target="_blank">
            <RoundButton aria-label="Socket on LinkedIn">
              <SVG children={LinkedIn} size={'20px'} className={styles.socialIcon} />
            </RoundButton>
          </a>
          <a href="https://youtube.com/channel/UCbquUpV7VZdFhwRTHlLQkqQ" target="_blank">
            <RoundButton aria-label="Socket on YouTube">
              <SVG children={YouTube} size={'20px'} className={styles.socialIcon} />
            </RoundButton>
          </a>
        </div>
      </PageSection>
      <PageSection style={PageSectionStyle.Senary}>
        <div className={styles.menuWrapper}>
          <div className={styles.copyright}>
            <Text type={TextStyles.caption} color={ColorStyles.secondary}>
              {t('site.footer.copyright.firstLine')}
            </Text>
            <Text type={TextStyles.caption} color={ColorStyles.secondary}>
              {t('site.footer.copyright.secondLine')}
            </Text>
          </div>
          {menu && <FooterMenu links={menu} />}
        </div>
      </PageSection>
    </footer>
  );
};

export default Footer;
