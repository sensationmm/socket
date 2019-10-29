import { shallow } from 'enzyme';
import * as React from 'react';

import Footer from '@somo/pda-components-footer/src';
import AccountLayout from '.';

describe('@somo/pda-layouts-regular component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      children: <div>foo</div>,
      footer: {
        title: 'Our smart technology needs a smart meter.',
        subTitle: "Check you're on the latest smart meter and start taking control your energy.",
        copyright: '2019 © Socket Energy. All rights reserved.',
      },
    };
  });

  it('should render Account Layout', () => {
    wrapper = shallow(<AccountLayout {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should render a footer', () => {
    props.hero = <Footer i18n={props.footer} />;
    wrapper = shallow(<AccountLayout {...props} />);
    expect(wrapper.find('Footer').length).toBe(1);
  });
});
