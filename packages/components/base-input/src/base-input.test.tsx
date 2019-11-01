import { shallow } from 'enzyme';
import React from 'react';

import Component from '.';

import Functions from '@somo/pda-utils-functions/src';

describe('<Input />', () => {
  let wrapper;
  let component;
  let input;

  const changeMock = jest.fn();
  const focusMock = jest.fn();
  const validateMock = jest.fn();
  const inputMock = 'Spongebob';
  const formatCurrencyMock = jest.spyOn(Functions, 'formatCurrency');
  const stripCurrencyMock = jest.spyOn(Functions, 'stripCurrency');

  describe('passing validation', () => {
    beforeEach(() => {
      const props = {
        id: 'input-name',
        label: 'Name',
        stateKey: 'name',
        handleChange: changeMock,
        handleFocus: focusMock,
        validate: validateMock,
        note: 'test note',
        value: '',
      };

      wrapper = shallow(<Component type="text" {...props} />);
      component = wrapper.find('[data-test="component-input"]');
      input = wrapper.find('[data-test="component-input-field"]');
    });

    test('renders without error', () => {
      expect(component.length).toBe(1);
      expect(component.props().style.display).toEqual('block');
    });

    test('onChange callback fires on type', () => {
      input.simulate('change', { target: { value: inputMock } });

      expect(changeMock).toHaveBeenCalledWith(inputMock);
    });

    test('onFocus callback fires on focus', () => {
      input.simulate('focus', {
        target: { value: focusMock },
      });

      expect(focusMock).toHaveBeenCalled();
    });

    test('validate is called on blur', () => {
      input.simulate('blur', { target: { value: inputMock } });

      expect(validateMock).toHaveBeenCalledTimes(1);
    });

    test('validate is not called on blur if readOnly', () => {
      const props = {
        id: 'input-name',
        label: 'Name',
        stateKey: 'name',
        handleChange: changeMock,
        handleFocus: focusMock,
        validate: validateMock,
        note: 'test note',
        value: '',
        readOnly: true,
      };
      wrapper = shallow(<Component type="text" {...props} />);
      input = wrapper.find('[data-test="component-input-field"]');

      input.simulate('blur', { target: { value: inputMock } });

      expect(validateMock).toHaveBeenCalledTimes(0);
    });

    test('renders note if passed', () => {
      const note = wrapper.find('[data-test="text-input-note"]');
      expect(note.length).toBe(1);
    });

    test('does not render note if none passed', () => {
      const props = {
        id: 'input-name',
        handleChange: changeMock,
        value: '',
      };

      const noNote = shallow(<Component type="text" {...props} />);
      const note = noNote.find('[data-test="text-input-note"]');
      expect(note.length).toBe(0);
    });

    test('renders currency field', () => {
      const props = {
        id: 'input-name',
        handleChange: changeMock,
        value: '',
        wrapperClass: 'currency',
      };

      wrapper = shallow(<Component type="text" {...props} />);
      input = wrapper.find('[data-test="component-input-field"]');

      input.simulate('change', { target: { value: inputMock } });

      expect(formatCurrencyMock).toHaveBeenCalledTimes(1);
      expect(stripCurrencyMock).toHaveBeenCalledTimes(1);
    });

    test('renders hidden field', () => {
      const props = {
        id: 'input-name',
        handleChange: changeMock,
        value: '',
        hidden: true,
      };

      wrapper = shallow(<Component type="text" {...props} />);
      component = wrapper.find('[data-test="component-input"]');

      expect(component.props().style.display).toEqual('none');
    });
  });

  describe('failing validation', () => {
    beforeEach(() => {
      const props = {
        id: 'input-name',
        label: 'Name',
        handleChange: changeMock,
        error: 'field required',
        value: '',
      };

      wrapper = shallow(<Component type="text" {...props} />);
      component = wrapper.find('[data-test="component-input"]');
      input = wrapper.find('[data-test="component-input-field"]');
    });

    test('error message set', () => {
      const error = wrapper.find('[data-test="text-input-error"]');

      expect(error.length).toBe(1);
      expect(error.text()).toBe('field required');
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
