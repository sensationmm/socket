import { formatISODate } from '@somo/pda-utils-dates/src';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import FlexRowGrid from '@somo/pda-components-flex-row-grid/src';
import Field from '../field/field.component';

export interface IPaymentDetailsProps {
  values: {
    accountName: string;
    accountNumber: string;
    sortCode: string;
    monthlyPaymentDate: string | null;
  };
}

const PaymentDetails: React.FC<IPaymentDetailsProps> = ({ values }) => {
  const [t] = useTranslation();

  return (
    <FlexRowGrid
      component={Field}
      content={[
        {
          label: t('site.account.payment.dateLabel'),
          value: values.monthlyPaymentDate
            ? `${formatISODate(values.monthlyPaymentDate, 'Do')} ${t('site.account.payment.dateValueSuffix')}`
            : t('site.account.payment.noPaymentDate'),
        },
        { label: t('site.account.payment.nameLabel'), value: values.accountName },
        { label: t('site.account.payment.accountNumberLabel'), value: values.accountNumber },
        { label: t('site.account.payment.sortCodeLabel'), value: values.sortCode },
      ]}
      cols={2}
    />
  );
};

export default PaymentDetails;
