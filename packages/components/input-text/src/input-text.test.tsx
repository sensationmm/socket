import { shallow } from 'enzyme';
import React from 'react';

import Component from '.';

describe('<InputText />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      id: 'input-name',
      label: 'Name',
      handleChange: jest.fn(),
      validationFunction: 'validateRequired',
      value: 'boo',
      validate: jest.fn(),
    };

    wrapper = shallow(<Component {...props} />);
  });

  test('renders without error', () => {
    const component = wrapper.find('[data-test="component-input-text"]');
    expect(component.length).toBe(1);
  });
});
