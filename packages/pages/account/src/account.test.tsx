import { shallow } from 'enzyme';
import * as React from 'react';

import About from '.';
import PersonalDetails from './personal-details.container';

describe('@somo/pda-pages-about', () => {
  let component;

  beforeAll(() => {
    component = shallow(<About />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });

  it('should render a personal details section', () => {
    const personalDetails = component.find(PersonalDetails);
    expect(personalDetails.length).toEqual(1);
  });
});
