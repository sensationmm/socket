import { shallow } from 'enzyme';
import React from 'react';

import Component from '.';

describe('<InputCurrency />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      id: 'input-currency',
      label: 'Name',
      handleChange: jest.fn(),
      validationFunction: 'validateRequired',
      value: 1,
    };

    wrapper = shallow(<Component {...props} />);
  });

  test('renders without error', () => {
    const component = wrapper.find('[data-test="component-input-currency"]');
    expect(component.length).toBe(1);
  });
});
