import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Tabs from '@somo/pda-components-tabs/src';
import ProductInfo from './product-info.component';

export interface IProductDetailsProps {
  values: {
    electricity?: {
      name: string;
      endDate: string;
      TIL: EON.IProductTilInformation;
    };
    gas?: {
      name: string;
      endDate: string;
      TIL: EON.IProductTilInformation;
    };
  };
}

const PaymentDetails: React.FC<IProductDetailsProps> = ({ values }) => {
  const { electricity, gas } = values;
  const [t] = useTranslation();
  const tabs = Array();

  if (electricity) {
    const electricTab = {
      label: t('site.account.product.tabs.electricity'),
      emoji: '⚡️',
      content: <ProductInfo productInfo={electricity} />,
    };
    tabs.push(electricTab);
  }

  if (gas) {
    const gasTab = {
      label: t('site.account.product.tabs.gas'),
      emoji: '🔥',
      content: <ProductInfo productInfo={gas} />,
    };
    tabs.push(gasTab);
  }

  return <Tabs tabs={tabs} />;
};

export default PaymentDetails;
