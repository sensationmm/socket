import { shallow } from 'enzyme';
import * as React from 'react';
import Share from '.';

describe('ring', () => {
  let props;

  beforeAll(() => {
    props = {
      header: 'Share this post',
      articleTitle: 'Article title',
      articleLink: 'https://www.eon.com',
    };
  });
  it('should render without error', () => {
    const wrapper = shallow(<Share {...props} />);
    expect(wrapper).toBeDefined();
  });
});
