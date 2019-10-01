import { shallow } from 'enzyme';
import * as React from 'react';
import { Ring } from '.';

describe('ring', () => {
  it('should export an Ring component', () => {
    expect(Ring).toBeDefined();
  });
  it('should render without error', () => {
    const wrapper = shallow(<Ring />);
    expect(wrapper).toBeDefined();
  });
});
