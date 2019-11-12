import classNames from 'classnames';
import React from 'react';

import Emoji from '@somo/pda-components-emoji/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

import * as styles from './tabs.module.css';

interface ITabProps {
  label: string;
  emoji?: string;
  content: JSX.Element | string;
}

export interface ITabsProps {
  tabs: ITabProps[];
  defaultTab?: number;
  fixedHeight?: number;
}

const Tabs: React.FC<ITabsProps> = ({ tabs, defaultTab, fixedHeight = 0 }) => {
  const setDefaultTab = defaultTab && defaultTab < tabs.length ? defaultTab : 0;
  const [activeTab, setActiveTab] = React.useState<number>(setDefaultTab);

  const tabList = [] as JSX.Element[];
  const tabContent = [] as JSX.Element[];

  const isFixedHeight = fixedHeight > 0;

  tabs.forEach((tab, count) => {
    const isActive = activeTab === count;

    tabList.push(
      <div
        key={`tab-${count}`}
        data-test={`tab-${count}`}
        className={classNames(styles.tab, { [styles.activeTab]: isActive })}
        onClick={() => setActiveTab(count)}
      >
        <Emoji>{tab.emoji}</Emoji>
        <Text
          element="span"
          type={TextStyles.segmentCopyFixed}
          color={isActive ? ColorStyles.secondary : ColorStyles.primary}
        >
          {tab.label}
        </Text>
      </div>,
    );

    tabContent.push(
      <div
        key={`tab-${count}`}
        data-test={`tab-content-${count}`}
        className={classNames(
          styles.tabContentItem,
          { [styles.activeContent]: isActive },
          { [styles.fixedHeight]: isFixedHeight },
        )}
      >
        {tab.content}
      </div>,
    );
  });

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>{tabList}</div>
      <div
        className={styles.tabContent}
        data-test="content"
        style={{ height: isFixedHeight ? `${fixedHeight}px` : 'auto' }}
      >
        {tabContent}
      </div>
    </div>
  );
};

export default Tabs;
