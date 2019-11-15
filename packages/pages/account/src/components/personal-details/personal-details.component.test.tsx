import { render } from '@testing-library/react';
import * as React from 'react';

import Component from './personal-details.component';

describe('PersonalDetails component', () => {
  it('should render the values', async () => {
    const values = {
      name: 'John Smith',
      email: 'john.smith@somoglobal.com',
      phone: '07563458747',
      accountNumber: '123234556',
      correspondenceAddress: '145 Regents Park Road',
      supplyAddress: '147 Regents Park Road',
    };
    const { getByText } = render(<Component values={values} />);

    expect(getByText(values.name)).toBeDefined();
    expect(getByText(values.email)).toBeDefined();
    expect(getByText(values.phone)).toBeDefined();
    expect(getByText(values.accountNumber)).toBeDefined();
    expect(getByText(values.correspondenceAddress)).toBeDefined();
    expect(getByText(values.supplyAddress)).toBeDefined();
  });
});
