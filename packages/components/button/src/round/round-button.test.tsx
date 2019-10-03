import { shallow } from 'enzyme';
import * as React from 'react';
import Component from '.';

describe('round button', () => {
  let wrapper;

  it('should output a round button element', () => {
    wrapper = shallow(<Component />);
    expect(wrapper.name()).toEqual('BaseButton');
  });
});
