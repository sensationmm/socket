import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

describe('@somo/pda-components-app-template component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      children: 'text goes here',
    };
    wrapper = shallow(<Component {...props} />);
  });

  it('should not throw', () => {
    expect(wrapper).toBeDefined();
  });
});
