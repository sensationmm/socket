import { render } from '@testing-library/react';
import * as React from 'react';

import { formatISODate } from '@somo/pda-utils-dates/src';
import Component from './payment-details.component';

jest.mock('@somo/pda-utils-dates/src', () => ({
  formatISODate: jest.fn().mockReturnValue('24th'),
}));

describe('PaymentDetails component', () => {
  it('should render the values', async () => {
    const values = {
      accountName: 'John Smith',
      accountNumber: '53464545674',
      sortCode: '34-55-66',
      monthlyPaymentDate: '2019-10-25',
    };
    const { getByText } = render(<Component values={values} />);

    expect(getByText(values.accountName)).toBeDefined();
    expect(getByText(values.accountNumber)).toBeDefined();
    expect(getByText(values.sortCode)).toBeDefined();
    expect(getByText(/24th/)).toBeDefined();
    expect(formatISODate).toHaveBeenCalledWith(values.monthlyPaymentDate, 'Do');
  });
});
