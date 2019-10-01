import { shallow } from 'enzyme';
import * as React from 'react';
import ExportedRing from '.';
import { Ring } from './ring.component';

describe('ring', () => {
  it('should export an Ring component', () => {
    expect(Ring).toBeDefined();
  });
  it('should render without error', () => {
    const wrapper = shallow(<Ring />);
    expect(wrapper).toBeDefined();
  });
  it('should export a Ring component', () => {
    expect(ExportedRing).toBeDefined();
  });
});
