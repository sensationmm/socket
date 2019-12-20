import { shallow } from 'enzyme';
import React from 'react';

import Image from '@somo/pda-components-image/src';

import Component from '.';

describe('TextImage', () => {
  let wrapper;

  const props = {
    text: (
      <div>
        <h1>Example</h1>
      </div>
    ),
    image: <Image src="foo.bar" />,
  };

  it('should render without error', () => {
    wrapper = shallow(<Component {...props} />);
    expect(wrapper).toBeDefined();
  });
});
