import React from 'react';

import { Round as RoundButton } from '@somo/pda-components-button/src';
import { Mail } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './share.module.css';

interface IShareProps {
  header: string;
  articleTitle: string;
  articleLink: string;
}

const Share: React.FC<IShareProps> = ({ header, articleTitle, articleLink }) => (
  <>
    <Text className={styles.shareHeader} type={TextStyles.body} color={ColorStyles.tertiary} element="p">
      {header}
    </Text>
    <a href={`mailto:?subject=${articleTitle}&body=${articleLink}`}>
      <RoundButton>
        <SVG children={Mail} size={'20px'} className={styles.shareIcon} />
      </RoundButton>
    </a>
  </>
);

export default Share;
