import { shallow } from 'enzyme';
import React from 'react';

import Component from '.';

describe('<InputPassword />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      id: 'input-password',
      label: 'Name',
      handleChange: jest.fn(),
      validationFunction: 'validateRequired',
      value: 'boo',
      validate: jest.fn(),
    };

    wrapper = shallow(<Component {...props} />);
  });

  test('renders without error', () => {
    const component = wrapper.find('[data-test="component-input-password"]');
    expect(component.length).toBe(1);
  });
});
