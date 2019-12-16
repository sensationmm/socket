import { fireEvent, render } from '@testing-library/react';
import { shallow } from 'enzyme';
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
jest.mock('@somo/pda-components-menu/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-components-navbar component', () => {
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

  it('should open mobile menu on menu button click', () => {
    const { container, getByRole } = render(<Component menu={MenuMock} />);
    fireEvent.click(getByRole('button'));
    // @ts-ignore
    expect(container.firstChild.childNodes[2].classList.contains('open')).toEqual(true);
    expect(document.body.classList.contains('bodyOverflowHidden')).toEqual(true);
  });
});
