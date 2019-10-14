import { shallow } from 'enzyme';
import * as React from 'react';

import LazyImage from '.';

describe('Lazy image', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      i18n: { noImage: 'foo' },
      src: 'foo.bar',
      alt: '',
    };
    wrapper = shallow(<LazyImage {...props} />);
  });

  it('should render', () => {
    expect(wrapper).toBeDefined();
  });
});
