import { shallow } from 'enzyme';
import * as React from 'react';

import HoldingImage from '.';

describe('Image', () => {
  it('should render', () => {
    const component = shallow(<HoldingImage text="Holding Image" />);
    expect(component).toBeDefined();
  });

  it('should render text passed in', () => {
    const component = shallow(<HoldingImage text="Holding Image" />);
    expect(component.html()).toContain('Holding Image');
  });
});
