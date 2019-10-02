import { shallow } from 'enzyme';
import * as React from 'react';
import Component from '.';

describe('outline button', () => {
  let wrapper;

  it('should output a button element', () => {
    wrapper = shallow(<Component />);
    expect(wrapper.name()).toEqual('BaseButton');
  });
});
