import * as React from 'react';
import { useTranslation } from 'react-i18next';

import FlexRowGrid from '@somo/pda-components-flex-row-grid/src';
import { formatISODate } from '@somo/pda-utils-dates/src';
import Field from '../field/field.component';

interface IProductInfoProps {
  productInfo: {
    name: string;
    endDate: string;
    TIL: EON.IProductTilInformation;
  };
}

const ProductInfo: React.FC<IProductInfoProps> = ({ productInfo }) => {
  const { name, endDate, TIL } = productInfo;
  const { contractType, unitRate, paymentMethod, standingChargeDd } = TIL;
  const [t] = useTranslation();

  return (
    <FlexRowGrid
      component={Field}
      content={[
        { label: t('site.account.product.product.nameLabel'), value: name },
        { label: t('site.account.product.product.unitRateLabel'), value: unitRate.inclVAT },
        {
          label: t('site.account.product.product.endDateLabel'),
          value: endDate
            ? formatISODate(endDate, 'DD/MM/YYYY')
            : contractType.itemValue === 'Variable Rate'
            ? t('site.account.product.noEndDate')
            : t('site.account.product.notApplicable'),
        },
        {
          label: t('site.account.product.product.standingChargeLabel'),
          value: standingChargeDd ? standingChargeDd.inclVAT : t('site.account.product.notApplicable'),
        },
        { label: t('site.account.product.product.supplierLabel'), value: t('site.account.product.supplierName') },
        { label: t('site.account.product.product.exitFeesLabel'), value: t('site.account.product.notApplicable') },
        { label: t('site.account.product.product.tariffLabel'), value: contractType.itemValue },
        { label: t('site.account.product.product.discountsLabel'), value: t('site.account.product.notApplicable') },
        { label: t('site.account.product.product.paymentMethodLabel'), value: paymentMethod.itemValue },
        { label: t('site.account.product.product.additionalLabel'), value: t('site.account.product.notApplicable') },
      ]}
      cols={2}
    />
  );
};

export default ProductInfo;
