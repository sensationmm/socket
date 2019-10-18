import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

const Foo = ({ title }) => {
  return <div style={{ backgroundColor: 'red' }}>{title}</div>;
};

const props = {
  component: Foo,
  cols: 2,
  content: [{ title: 'first' }, { title: 'second' }],
};

describe('@somo/pda-components-flex-row-grid component', () => {
  let wrapper;

  it('should render without error', () => {
    wrapper = shallow(<Component {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('handles uneven layout', () => {
    wrapper = shallow(<Component {...props} cols={3} />);
    expect(wrapper.find('.filler').length).toBe(1);
  });
});
