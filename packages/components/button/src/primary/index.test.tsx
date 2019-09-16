import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

describe('primary button', () => {
  let wrapper;
  let props;

  it('should render a base button with custom styles', () => {
    props = {
      apple: true,
      banana: 'a',
      thing: 1,
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.find('BaseButton').props()).toEqual(expect.objectContaining(props));
  });
});
