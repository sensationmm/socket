import { shallow } from 'enzyme';
import React from 'react';

import Component from '.';

import { Mail, Phone, Sms } from '@somo/pda-components-icons/src';

describe('@somo/pda-components-multi-option-select component', () => {
  let wrapper;
  let component;

  const props = {
    handleChange: jest.fn(),
    items: [
      {
        label: 'Email',
        value: 'email',
        icon: Mail,
      },
      {
        label: 'SMS',
        value: 'sms',
        icon: Sms,
      },
      {
        label: 'Phone',
        value: 'phone',
        icon: Phone,
      },
    ],
  };

  beforeEach(() => {
    wrapper = shallow(<Component {...props} />);
    component = wrapper.find('[data-test="component-multi-select"]');
  });

  test('renders without error', () => {
    expect(component.length).toBe(1);

    const options = component.find('[data-test="multi-select-option"]');
    expect(options.length).toEqual(props.items.length);
  });

  it('selects a deselected option when clicked', () => {
    const options = component.find('[data-test="multi-select-option"]');

    options.at(0).simulate('click');
    expect(props.handleChange).toBeCalledWith([props.items[0].value]);
  });

  it('deselects a selected option when clicked', () => {
    wrapper = shallow(<Component {...props} value={['email']} />);
    component = wrapper.find('[data-test="component-multi-select"]');
    const options = component.find('[data-test="multi-select-option"]');

    options.at(0).simulate('click');
    expect(props.handleChange).toBeCalledWith([]);
  });

  test('renders label if passed', () => {
    const hasLabel = shallow(<Component {...props} label="Contact preferences" />);
    const label = hasLabel.find('[data-test="select-label"]');
    expect(label.length).toBe(1);
  });

  test('renders error if passed', () => {
    const hasError = shallow(<Component {...props} error="Please select" />);
    const error = hasError.find('[data-test="text-input-error"]');
    expect(error.length).toBe(1);
  });

  test('renders note if passed', () => {
    const noNote = shallow(<Component {...props} note="test note" />);
    const note = noNote.find('[data-test="text-input-note"]');
    expect(note.length).toBe(1);
  });

  test('read only version', () => {
    const readOnly = shallow(<Component {...props} readOnly={true} label="Test label" />);
    component = readOnly.find('[data-test="component-multi-select"]');
    const options = component.find('[data-test="multi-select-option"]');

    options.at(0).simulate('click');

    expect(props.handleChange).toHaveBeenCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
