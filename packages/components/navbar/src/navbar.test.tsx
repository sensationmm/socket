import { shallow } from 'enzyme';
import { navigate } from 'gatsby';
import * as React from 'react';

import Component from '.';

import Menu from '@somo/pda-components-menu/src';

const MenuMock = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

jest.mock('gatsby', () => ({
  navigate: jest.fn(),
}));

describe('@somo/pda-components-page-hero component', () => {
  let wrapper;

  it('should render without error', () => {
    wrapper = shallow(<Component />);
    expect(wrapper).toBeDefined();

    expect(wrapper.find(Menu).exists()).toBe(false);
  });

  it('should render menu if given', () => {
    wrapper = shallow(<Component menu={MenuMock} />);

    expect(wrapper.find(Menu).exists()).toBe(true);
  });

  it('logo links to homepage', () => {
    wrapper = shallow(<Component menu={MenuMock} />);

    wrapper.find('.logo').simulate('click');

    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('triggers mobile menu', () => {
    wrapper = shallow(<Component menu={MenuMock} />);

    wrapper.find('.mobileMenu').simulate('click');

    expect(wrapper.state().menuOpen).toEqual(true);
  });
});
