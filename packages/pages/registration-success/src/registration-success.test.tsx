import { shallow } from 'enzyme';
import * as React from 'react';

import RegistrationSuccess from '.';

jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-registration-success', () => {
  let component;

  it('should render the component successfully', () => {
    component = shallow(<RegistrationSuccess />);
    expect(component).toBeDefined();
  });
});
