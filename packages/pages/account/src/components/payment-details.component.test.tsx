import { render } from '@testing-library/react';
import * as React from 'react';

import Component from './payment-details.component';

describe('PaymentDetails component', () => {
  it('should render the values', async () => {
    const values = {
      accountName: 'John Smith',
      accountNumber: '53464545674',
      sortCode: '34-55-66',
      monthlyPaymentDate: '15th',
    };
    const { getByText } = render(<Component values={values} />);

    expect(getByText(values.accountName)).toBeDefined();
    expect(getByText(values.accountNumber)).toBeDefined();
    expect(getByText(values.sortCode)).toBeDefined();
    expect(getByText(values.monthlyPaymentDate)).toBeDefined();
  });
});
