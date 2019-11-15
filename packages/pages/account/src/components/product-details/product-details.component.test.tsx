import { render } from '@testing-library/react';
import * as React from 'react';

import Component from './product-details.component';

describe('ProductDetails component', () => {
  it('should render the values', async () => {
    const values = {
      electricity: {
        __typename: 'ProductInformation',
        name: 'Electricity 1-Rate | Fixed - 12 | 3012',
        endDate: '',
        TIL: {
          tariff: { itemValue: 'Electricity 1-Rate | Fixed - 12 | 3012', inclVAT: '' },
          contractType: { itemValue: 'Fixed Rate', inclVAT: '' },
          paymentMethod: { itemValue: 'Variable Direct Debit', inclVAT: '' },
          unitRate: { itemValue: '', inclVAT: '11.55p/kWh' },
          standingChargeDd: { itemValue: '', inclVAT: '7.50p/day (£27.36/year)' },
          billingFrequency: { itemValue: 'Monthly', inclVAT: '' },
        },
      },
      gas: {
        __typename: 'ProductInformation',
        name: 'Gas - 12M | 2012',
        endDate: '',
        TIL: {
          tariff: { itemValue: 'Gas - 12M | 2012', inclVAT: '' },
          contractType: { itemValue: 'Fixed Rate', inclVAT: '' },
          paymentMethod: { itemValue: 'Variable Direct Debit', inclVAT: '' },
          unitRate: { itemValue: '', inclVAT: '11.55p/kWh' },
          standingChargeDd: { itemValue: '', inclVAT: '7.50p/day (£27.36/year)' },
          billingFrequency: { itemValue: 'Monthly', inclVAT: '' },
        },
      },
    };
    const { getAllByText } = render(<Component values={values} />);
    const { electricity } = values;

    expect(getAllByText(electricity.name)).toBeDefined();
    expect(getAllByText(electricity.TIL.tariff.itemValue)[0]).toBeDefined();
    expect(getAllByText(electricity.TIL.contractType.itemValue)[0]).toBeDefined();
    expect(getAllByText(electricity.TIL.paymentMethod.itemValue)[0]).toBeDefined();
    expect(getAllByText(electricity.TIL.unitRate.inclVAT)[0]).toBeDefined();
    expect(getAllByText(electricity.TIL.standingChargeDd.inclVAT)[0]).toBeDefined();
  });
});
