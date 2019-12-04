import { shallow } from 'enzyme';
import * as React from 'react';

import Register from '.';

describe('@somo/pda-pages-register', () => {
  let component;

  it('should render the component successfully', () => {
    component = shallow(<Register />);
    expect(component).toBeDefined();
  });
});
