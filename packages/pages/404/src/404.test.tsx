import { shallow } from 'enzyme';
import * as React from 'react';

import FourOh from '.';

describe('@somo/oxd-pages-404', () => {
  let component;

  beforeAll(() => {
    component = shallow(<FourOh />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
