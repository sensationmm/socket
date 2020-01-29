import classNames from 'classnames';
import React from 'react';

import Emoji from '@somo/pda-components-emoji/src/emoji.component';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src/text.component';

import * as styles from './message.module.css';

export interface IMessageProps {
  text: string;
  emoji?: string;
}

const Message: React.FC<IMessageProps> = ({ text, emoji }) => {
  return (
    <div className={styles.message}>
      <div className={classNames(styles.icon, { [styles.hasEmoji]: emoji !== '' })}>
        {emoji && <Emoji size={24}>{emoji}</Emoji>}
      </div>

      <Text type={TextStyles.body} color={ColorStyles.secondary}>
        {text}
      </Text>
    </div>
  );
};

export default Message;
