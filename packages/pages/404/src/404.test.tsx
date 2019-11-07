import { shallow } from 'enzyme';
import * as React from 'react';

import FourOh from '.';

describe('@somo/pda-pages-404', () => {
  let component;

  it('should render the component successfully', () => {
    component = shallow(<FourOh />);
    expect(component).toBeDefined();
  });
});
