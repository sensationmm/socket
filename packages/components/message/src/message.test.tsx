import { shallow } from 'enzyme';
import React from 'react';

import Component from '.';

describe('Message', () => {
  let wrapper;

  const props = {
    text: 'Warning message goes here',
  };

  it('should render without error', () => {
    wrapper = shallow(<Component {...props} />);
    expect(wrapper).toBeDefined();
  });
});
