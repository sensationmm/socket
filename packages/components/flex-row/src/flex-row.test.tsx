import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

const Foo = () => {
  return <div style={{ backgroundColor: 'red' }}>foo</div>;
};

describe('@somo/pda-components-flex-row component', () => {
  let wrapper;

  it('should display correct number of columns', () => {
    wrapper = shallow(
      <Component layout={[30, 20, 50]}>
        <Foo />
        <Foo />
        <Foo />
      </Component>,
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.children().find('div').length).toBe(3);
  });

  it('should display single column', () => {
    wrapper = shallow(
      <Component>
        <Foo />
      </Component>,
    );

    expect(wrapper.find('div').length).toBe(1);
  });
});
