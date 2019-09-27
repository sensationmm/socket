import { shallow } from 'enzyme';
import * as React from 'react';

import Home from '.';

describe('@somo/oxd-pages-home', () => {
  let component;

  beforeAll(() => {
    component = shallow(<Home />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
