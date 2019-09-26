import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

describe('@somo/pda-components-text component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      children: 'text goes here',
      element: 'h3',
    };
    wrapper = shallow(<Component {...props} />);
  });

  it('should render the given prop element as the html tag', () => {
    expect(wrapper.find(props.element)).toHaveLength(1);
  });
});
