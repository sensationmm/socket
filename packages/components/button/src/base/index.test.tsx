import { shallow } from 'enzyme';
import * as React from 'react';
import Component from '.';

describe('base button', () => {
  let props;
  let wrapper;

  it('should pass through props', () => {
    props = {
      onClick: jest.fn(() => null),
      type: 'reset',
      tabindex: 1,
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.props()).toEqual(expect.objectContaining(props));
  });
  it('should render the children', () => {
    wrapper = shallow(<Component children="lol" />);
    expect(wrapper.html()).toContain('lol');
  });

  it('should override base styles with given styles prop', () => {
    props = {
      styles: {
        base: 'jestBase',
      },
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.props().className).toContain(props.styles.base);
    expect(wrapper.props().className).not.toContain('base');
  });

  it('should output a button element', () => {
    wrapper = shallow(<Component />);
    expect(wrapper.name()).toEqual('button');
  });

  describe('when size is mini', () => {
    beforeEach(() => {
      props = {
        onClick: jest.fn(() => null),
        size: 'mini',
      };
      wrapper = shallow(<Component {...props} />);
    });

    it('should set a class of mini', () => {
      expect(wrapper.props().className).toEqual('mini');
    });
  });

  describe('when size is large', () => {
    beforeEach(() => {
      props = {
        onClick: jest.fn(() => null),
        size: 'large',
      };
      wrapper = shallow(<Component {...props} />);
    });

    it('should set a class of large', () => {
      expect(wrapper.props().className).toEqual('large');
    });
  });

  describe('when size is regular', () => {
    beforeEach(() => {
      props = {
        onClick: jest.fn(() => null),
        size: 'regular',
      };
      wrapper = shallow(<Component {...props} />);
    });

    it('should set a class of regular', () => {
      expect(wrapper.props().className).toEqual('regular');
    });
  });
});
