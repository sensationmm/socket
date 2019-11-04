import { shallow } from 'enzyme';
import React from 'react';

import Component from '.';

describe('<Input />', () => {
  let wrapper;
  let component;
  let layout;

  const mockOnChange = jest.fn();

  beforeEach(() => {
    const props = {
      id: 'input-checkbox',
      label: 'Please click to confirm',
      handleChange: mockOnChange,
    };

    wrapper = shallow(<Component {...props} />);
    component = wrapper.find('[data-test="component-checkbox"]');
    layout = wrapper.find('[data-test="component-checkbox-layout"]');
  });

  test('renders without error', () => {
    expect(component.length).toBe(1);
  });

  test('onChange() called when input clicked', () => {
    layout.simulate('click');
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('onChange() not called when input click but disabled', () => {
    const props = {
      id: 'input-checkbox',
      label: 'Please click to confirm',
      handleChange: mockOnChange,
      disabled: true,
    };

    wrapper = shallow(<Component {...props} />);
    layout = wrapper.find('[data-test="component-checkbox-layout"]');
    layout.simulate('click');
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  test('shows error state if set', () => {
    const props = {
      id: 'input-checkbox',
      label: 'Please click to confirm',
      handleChange: mockOnChange,
      error: 'Must click',
    };

    wrapper = shallow(<Component {...props} />);
    const checkbox = wrapper.find('[data-test="component-checkbox-toggle"]');

    expect(checkbox.props().className).toContain('error');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
