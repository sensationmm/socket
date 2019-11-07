import { shallow } from 'enzyme';
import * as React from 'react';

import Footer from '@somo/pda-components-footer/src';
import AccountLayout from '.';

describe('@somo/pda-layouts-regular component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      children: <div>foo</div>,
    };
  });

  it('should render Account Layout', () => {
    wrapper = shallow(<AccountLayout {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should render a footer', () => {
    props.hero = <Footer />;
    wrapper = shallow(<AccountLayout {...props} />);
    expect(wrapper.find('Footer').length).toBe(1);
  });
});
