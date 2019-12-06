import { shallow } from 'enzyme';
import * as React from 'react';

import RegistrationSuccess from '.';

describe('@somo/pda-pages-registration-success', () => {
  let component;

  it('should render the component successfully', () => {
    component = shallow(<RegistrationSuccess />);
    expect(component).toBeDefined();
  });
});
