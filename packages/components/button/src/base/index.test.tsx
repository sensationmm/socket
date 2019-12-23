import { shallow } from 'enzyme';
import { Link } from 'gatsby';
import * as React from 'react';
import Component, { ButtonTypes } from '.';

describe('base button', () => {
  let props;
  let wrapper;

  it('should pass through props', () => {
    props = {
      onClick: jest.fn(() => null),
      tabindex: 1,
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.props()).toMatchObject(props);
  });

  it('should shallow the children', () => {
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

  it('should output a button element by default', () => {
    wrapper = shallow(<Component />);
    expect(wrapper.name()).toEqual('button');
  });

  it('should output a button element if type prop value is equal with button', () => {
    wrapper = shallow(<Component type={ButtonTypes.button} />);
    expect(wrapper.name()).toEqual('button');
  });

  it('should output an anchor element if type prop value is equal with externalLink', () => {
    wrapper = shallow(<Component type={ButtonTypes.externalLink} link="http://google.com/" />);
    expect(wrapper.name()).toEqual('a');
  });

  it('should output a gatsby link if type prop value is equal with internalLink', () => {
    wrapper = shallow(<Component type={ButtonTypes.internalLink} link="/" />);
    expect(wrapper.find(Link).length).toEqual(1);
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

  describe('when size is medium', () => {
    beforeEach(() => {
      props = {
        onClick: jest.fn(() => null),
        size: 'medium',
      };
      wrapper = shallow(<Component {...props} />);
    });

    it('should set a class of medium', () => {
      expect(wrapper.props().className).toEqual('medium');
    });
  });
});
