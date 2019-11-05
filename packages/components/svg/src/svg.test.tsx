import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

describe('icons component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      children: 'svg',
    };
  });

  it('should render an icons with default props', () => {
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.find('svg').props()).toEqual({
      fill: 'currentColor',
      width: '100%',
      height: '100%',
      preserveAspectRatio: 'xMidYMid',
      style: {
        display: 'flex',
        margin: 'auto',
        fill: 'currentColor',
        height: '100%',
        stroke: 'none',
        verticalAlign: 'middle',
        width: '100%',
      },
    });
  });

  it('should set stroke on child', () => {
    props = {
      children: 'svg',
      stroke: 'black',
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.find(props.children).props()).toEqual({
      fill: 'currentColor',
      width: '100%',
      height: '100%',
      preserveAspectRatio: 'xMidYMid',
      style: {
        display: 'flex',
        margin: 'auto',
        fill: 'currentColor',
        height: '100%',
        stroke: props.stroke,
        verticalAlign: 'middle',
        width: '100%',
      },
    });
  });

  it('should set width on child', () => {
    props = {
      children: 'svg',
      width: '40px',
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.find(props.children).props()).toEqual({
      fill: 'currentColor',
      width: props.width,
      height: '100%',
      preserveAspectRatio: 'xMidYMid',
      style: {
        display: 'flex',
        margin: 'auto',
        fill: 'currentColor',
        height: '100%',
        stroke: 'none',
        verticalAlign: 'middle',
        width: props.width,
      },
    });
  });

  it('should set size to be 1:1 width:height on child', () => {
    props = {
      children: 'svg',
      size: '80px',
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.find(props.children).props()).toEqual({
      fill: 'currentColor',
      width: props.size,
      height: props.size,
      preserveAspectRatio: 'xMidYMid',
      style: {
        display: 'flex',
        margin: 'auto',
        fill: 'currentColor',
        height: props.size,
        stroke: 'none',
        verticalAlign: 'middle',
        width: props.size,
      },
    });
  });

  it('should append the given className', () => {
    props = {
      children: 'svg',
      className: 'jest-123',
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.prop('className')).toBe('container jest-123');
  });
});
