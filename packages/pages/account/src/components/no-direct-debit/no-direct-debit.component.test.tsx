import { shallow } from 'enzyme';
import * as React from 'react';

import Component from './no-direct-debit.component';

jest.mock('react-i18next', () => ({
  useTranslation: () => [jest.fn(), { t: jest.fn().mockReturnValue('hi') }],
}));

describe('NoDirectDebit component', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper).toBeDefined();
  });
});
