import { shallow } from 'enzyme';
import * as React from 'react';

import { ISiteMetadata } from '@somo/pda-context-site-metadata/src';
import { Menu } from './menu.component';
import { IMenuProps } from './menu.component';

const MenuMock = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

describe('@somo/pda-components-menu component', () => {
  let props: IMenuProps;
  let wrapper;

  let siteMetadata: ISiteMetadata;

  beforeEach(() => {
    props = {
      links: MenuMock,
      isAuthenticated: false,
      userId: '1',
    };

    siteMetadata = {
      siteUrl: '',
      ciamCommunityUrl: '',
      ciamClientId: '',
    };
  });

  it('should render menu passed as props', () => {
    wrapper = shallow(<Menu {...props} />, { context: { siteMetadata } }).dive();

    expect(wrapper).toBeDefined();

    const items = wrapper.find('ul li a');

    for (let i = 0; i < MenuMock.length; i += 1) {
      const link = items.at(i);

      expect(link.text()).toEqual(MenuMock[i].label);
      expect(link.props().href).toEqual(MenuMock[i].link);
    }
  });

  it('should render a login and a register link if user is not logged in and it is the local environment', () => {
    wrapper = shallow(<Menu {...props} />, { context: { siteMetadata } }).dive();
    expect(wrapper).toBeDefined();

    const items = wrapper.find('ul li a');
    expect(items.at(3).props().href).toEqual('/login');
    expect(items.at(4).props().href).toEqual('/register');
  });

  it('should render a logout link if user is logged in and it is the local environment', () => {
    props.isAuthenticated = true;
    wrapper = shallow(<Menu {...props} />, { context: { siteMetadata } }).dive();
    expect(wrapper).toBeDefined();

    const items = wrapper.find('ul li a');
    expect(items.at(3).props().href).toEqual('/logout');
  });
});
