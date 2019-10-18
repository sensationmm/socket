import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import * as React from 'react';

import SVG from '@somo/pda-components-svg/src';
import Avatar from './avatar.component';

describe('@somo/pda-components-avatar', () => {
  it('renders a img tag if props.picture is truthy', () => {
    const { getByTestId } = render(<Avatar picture="https://picsum.photos/id/287/100/100" />);
    expect(getByTestId('avatar-image')).toBeTruthy();
  });

  it('renders a svg if props.picture is truthy', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find(SVG)).toBeTruthy();
  });

  it('renders a small image', () => {
    const wrapper = shallow(<Avatar isSmall={true} />);
    expect(wrapper.find('.small')).toBeTruthy();
  });

  it('renders a responsive image', () => {
    const wrapper = shallow(<Avatar isResponsive={true} />);
    expect(wrapper.find('.responsive')).toBeTruthy();
  });
});
