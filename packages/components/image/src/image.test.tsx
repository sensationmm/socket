import { shallow } from 'enzyme';
import * as React from 'react';

import Image from '.';

describe('Image', () => {
  it('should render', () => {
    const component = shallow(<Image src="foo.bar" i18n={{ noImage: 'foo' }} />);
    expect(component).toBeDefined();
  });

  it('renders a LazyImage component', () => {
    const component = shallow(<Image isLazy={true} src="foo.bar" i18n={{ noImage: 'foo' }} />);
    expect(component.find('LazyImage').exists()).toBeTruthy();
  });
});
