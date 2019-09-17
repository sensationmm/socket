import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

describe('checkbox component', () => {
  let wrapper;
  let props;

  describe('default', () => {
    beforeEach(() => {
      props = {
        className: 'form-input',
        input: {
          value: '',
        },
        meta: {
          touched: true,
          invalid: false,
          valid: true,
          error: '',
        },
      };
    });

    it('should render as type text', () => {
      props.type = 'text';
      wrapper = shallow(<Component {...props} />);
      expect(wrapper.find('input').props().type).toBe('text');
    });

    it('should render as type password', () => {
      props.type = 'password';
      wrapper = shallow(<Component {...props} />);
      expect(wrapper.find('input').props().type).toBe('password');
    });

    it('should render as type email', () => {
      props.type = 'email';
      wrapper = shallow(<Component {...props} />);
      expect(wrapper.find('input').props().type).toBe('email');
    });
  });

  describe('disabled', () => {
    beforeEach(() => {
      props = {
        className: 'form-input',
        type: 'text',
        disabled: true,
        input: {
          value: '',
        },
        meta: {
          touched: true,
          invalid: false,
          valid: true,
          error: '',
        },
      };
    });

    it('should render input as disabled', () => {
      wrapper = shallow(<Component {...props} />);
      expect(wrapper.find('input').props().disabled).toBeTruthy();
    });
  });

  describe('placeholder', () => {
    beforeEach(() => {
      props = {
        className: 'form-input',
        type: 'email',
        placeholder: 'Please enter email',
        input: {
          value: '',
        },
        meta: {
          touched: true,
          invalid: false,
          valid: true,
          error: '',
        },
      };
    });

    it('should render input with placeholder text', () => {
      wrapper = shallow(<Component {...props} />);
      expect(wrapper.find('input').props().placeholder).toBe('Please enter email');
    });
  });
});
