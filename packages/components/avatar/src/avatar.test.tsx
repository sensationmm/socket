import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import * as React from 'react';

import SVG from '@somo/pda-components-svg/src';
import Avatar, { AvatarSizes, AvatarStyles } from './avatar.component';

describe('@somo/pda-components-avatar', () => {
  it('renders a img tag if props.picture is truthy', () => {
    const { getByTestId } = render(<Avatar picture="https://picsum.photos/id/287/100/100" />);
    expect(getByTestId('avatar-image')).toBeTruthy();
  });

  it('renders a svg if picture prop value is truthy', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find(SVG)).toBeTruthy();
  });

  it('renders a small image', () => {
    const wrapper = shallow(<Avatar size={AvatarSizes.Small} />);
    expect(wrapper.find('.small')).toBeTruthy();
  });

  it('renders a medium image', () => {
    const wrapper = shallow(<Avatar size={AvatarSizes.Medium} />);
    expect(wrapper.find('.medium')).toBeTruthy();
  });

  it('renders a large image', () => {
    const wrapper = shallow(<Avatar size={AvatarSizes.Large} />);
    expect(wrapper.find('.large')).toBeTruthy();
  });

  it('renders a responsive image', () => {
    const wrapper = shallow(<Avatar isResponsive={true} />);
    expect(wrapper.find('.responsive')).toBeTruthy();
  });

  it('renders a primary style', () => {
    const wrapper = shallow(<Avatar style={AvatarStyles.Primary} />);
    expect(wrapper.find('.primary')).toBeTruthy();
  });

  it('renders a secondary style', () => {
    const wrapper = shallow(<Avatar style={AvatarStyles.Primary} />);
    expect(wrapper.find('.secondary')).toBeTruthy();
  });
});
