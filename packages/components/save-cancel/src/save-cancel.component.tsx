// import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Outline as ButtonOutline, Primary as ButtonPrimary } from '@somo/pda-components-button/src';

import * as styles from './save-cancel.module.css';

export interface ISaveCancelProps {
  actionPrimary: () => void;
  actionSecondary?: () => void;
  labelPrimary?: string;
  labelSecondary?: string;
  disabled?: boolean;
}

const SaveCancel: React.FC<ISaveCancelProps> = ({
  actionPrimary,
  actionSecondary,
  disabled = false,
  labelPrimary,
  labelSecondary,
}) => {
  const [t] = useTranslation();

  return (
    <div className={styles.container}>
      {actionSecondary && (
        <div>
          <ButtonOutline
            size="mini"
            disabled={disabled}
            children={labelSecondary || t('actions.cancel')}
            onClick={actionSecondary}
          />
        </div>
      )}
      <div>
        <ButtonPrimary
          size="mini"
          disabled={disabled}
          children={labelPrimary || t('actions.save')}
          onClick={actionPrimary}
        />
      </div>
    </div>
  );
};

export default SaveCancel;
