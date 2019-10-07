import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

const menuMock = [
  { label: 'Link 1', link: 'http://www.google.com' },
  { label: 'Link 2', link: 'http://www.google.com' },
  { label: 'Link 3', link: 'http://www.google.com' },
];

const i18n = {
  title: 'Our smart technology needs a smart meter.',
  subTitle: "Check you're on the latest smart meter and start taking control your energy.",
  copyright: '2019 © Socket Energy. All rights reserved.',
};

describe('@somo/pda-components-footer component', () => {
  let wrapper;

  it('should render without error', () => {
    wrapper = shallow(<Component i18n={i18n} />);
    expect(wrapper).toBeDefined();
  });

  it('should render menu passed as props', () => {
    wrapper = shallow(<Component i18n={i18n} menu={menuMock} />);

    expect(wrapper.find('.nav ul li').length).toEqual(menuMock.length);
  });
});
