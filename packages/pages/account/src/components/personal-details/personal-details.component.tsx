import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Avatar, { AvatarSizes, AvatarStyles, SvgTypes } from '@somo/pda-components-avatar/src';
import FlexRowGrid from '@somo/pda-components-flex-row-grid/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import Field, { BorderStyles } from '../field/field.component';

import * as styles from './personal-details.module.css';

export interface IPersonalDetailsProps {
  values: {
    name: string;
    email: string;
    phone: string;
    accountNumber: string;
    correspondenceAddress: string;
    supplyAddress: string;
  };
}

const PersonalDetails: React.FC<IPersonalDetailsProps> = ({ values }) => {
  const [t] = useTranslation();

  return (
    <>
      <div className={styles.personalDetailsFirstRow}>
        <FlexRow layout={[35, 65]}>
          <div className={styles.avatarWrapper}>
            <Avatar
              size={AvatarSizes.Large}
              style={AvatarStyles.Secondary}
              svgType={SvgTypes.Logo}
              isResponsive={true}
            />
          </div>
          <div>
            <FlexRowGrid
              component={Field}
              content={[
                {
                  label: t('site.account.personal.nameLabel'),
                  value: values.name,
                  disabled: true,
                  borderStyle: BorderStyles.dark,
                },
                {
                  label: t('site.account.personal.accountNumberLabel'),
                  value: values.accountNumber,
                  disabled: true,
                  borderStyle: BorderStyles.dark,
                },
                {
                  label: t('site.account.personal.supplyAddressLabel'),
                  value: values.supplyAddress,
                  borderStyle: BorderStyles.dark,
                },
              ]}
              cols={1}
            />
          </div>
        </FlexRow>
      </div>
      <div className={styles.personalDetailsSecondRow}>
        <FlexRowGrid
          component={Field}
          content={[
            { label: t('site.account.personal.emailLabel'), value: values.email },
            { label: t('site.account.personal.phoneLabel'), value: values.phone },
            { label: t('site.account.personal.passwordLabel'), value: '*******' },
            {
              label: t('site.account.personal.correspondenceAddressLabel'),
              value: values.correspondenceAddress,
              editable: true,
              editText: t('site.account.personal.correspondenceAddressEditText'),
            },
          ]}
          cols={2}
        />
      </div>
    </>
  );
};

export default PersonalDetails;
