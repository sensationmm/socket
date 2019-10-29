import { shallow } from 'enzyme';
import * as React from 'react';

import { AvatarSizes } from '@somo/oxd-components-avatar/src';
import Component from '.';

describe('@somo/pda-components-article-author component', () => {
  let wrapper;
  const props = {
    name: 'John Smith',
    avatar: '/path-to-image.png',
    date: '2019-09-07T15:53:00+05:00',
    avatarSize: AvatarSizes.Small,
  };

  it('should render without error', () => {
    wrapper = shallow(<Component {...props} />);
    expect(wrapper).toBeDefined();

    expect(wrapper.find('.articleAuthor').length).toEqual(1);
  });

  it('should render an avatar', () => {
    wrapper = shallow(<Component {...props} />);
    const avatar = wrapper.find('Avatar');
    const avatarProps = avatar.props();
    expect(avatar.length).toEqual(1);
    expect(avatarProps).toMatchObject({
      picture: props.avatar,
      alt: props.name,
      size: props.avatarSize,
    });
  });

  it('should render author name', () => {
    wrapper = shallow(<Component {...props} />);
    const authorNameText = wrapper
      .find('Text')
      .at(0)
      .childAt(0);
    expect(authorNameText.text()).toEqual(props.name);
  });

  it('should render the date in format `dd LLL yyyy`', () => {
    wrapper = shallow(<Component {...props} />);
    const dateText = wrapper
      .find('Text')
      .at(1)
      .childAt(0);
    expect(dateText.text()).toEqual('07 Sep 2019');
  });
});
