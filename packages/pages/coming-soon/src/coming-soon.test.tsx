import { shallow } from 'enzyme';
import * as React from 'react';

import ComingSoon from '.';

jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-coming-soon', () => {
  let component;

  it('should render the component successfully', () => {
    component = shallow(<ComingSoon />);
    expect(component).toBeDefined();
  });
});
