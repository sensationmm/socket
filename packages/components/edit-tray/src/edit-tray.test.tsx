import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

describe('@somo/pda-components-edit-tray component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      children: 'children',
      title: 'title',
      onClose: jest.fn(),
    };
    wrapper = shallow(<Component {...props} />);
  });

  it('should ', () => {
    expect(wrapper).toBeDefined();
  });
});
