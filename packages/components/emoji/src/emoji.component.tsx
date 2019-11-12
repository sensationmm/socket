import classNames from 'classnames';
import React from 'react';
import Twemoji from 'react-twemoji';

import * as styles from './emoji.module.css';

export interface IEmojiProps {
  size?: 16 | 24 | 32;
}

const Emoji: React.FC<IEmojiProps> = ({ size = 16, children }) => {
  const options = {
    // base: @TODO add when hosted on our own CDN
    folder: 'svg',
    ext: '.svg',
    className: classNames(
      styles.emoji,
      { [styles.small]: size === 16 },
      { [styles.med]: size === 24 },
      { [styles.large]: size === 32 },
    ),
  };

  return <Twemoji options={options}>{children}</Twemoji>;
};

export default Emoji;
