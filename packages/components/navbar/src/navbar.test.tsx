import { fireEvent, render } from '@testing-library/react';
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

  it('should render a menu if given', () => {
    wrapper = shallow(<Component menu={MenuMock} />);

    expect(wrapper.find(Menu).exists()).toBe(true);
  });

  it('should render a logo link to homepage', () => {
    wrapper = shallow(<Component menu={MenuMock} />);

    wrapper.find('.logo').simulate('click');

    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('should open mobile menu on menu button click', () => {
    const { container, getByRole } = render(<Component menu={MenuMock} />);
    fireEvent.click(getByRole('button'));
    // @ts-ignore
    expect(container.firstChild.childNodes[2].classList.contains('open')).toEqual(true);
    expect(document.body.classList.contains('bodyOverflowHidden')).toEqual(true);
  });
});
