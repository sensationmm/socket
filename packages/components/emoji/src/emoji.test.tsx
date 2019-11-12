import { mount } from 'enzyme';
import React from 'react';
import Twemoji from 'react-twemoji';

import Component from '.';

import * as styles from './emoji.module.css';

describe('EmojiText', () => {
  let wrapper;

  it('should render without error', () => {
    wrapper = mount(<Component>{'😂'}</Component>);
    expect(wrapper).toBeDefined();
  });

  it('renders default size', () => {
    wrapper = mount(<Component>{'😂'}</Component>);

    const img = wrapper.find(Twemoji);
    expect(img.props().options.className).toContain(styles.small);
  });

  it('renders specified size', () => {
    wrapper = mount(<Component size={32}>{'😂'}</Component>);

    const img = wrapper.find(Twemoji);
    expect(img.props().options.className).toContain(styles.large);
  });
});
