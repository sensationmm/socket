import { shallow } from 'enzyme';
import * as React from 'react';

import Footer from '@somo/pda-components-footer/src';
import PageHero from '@somo/pda-components-page-hero/src';
import RegularLayout from '.';

describe('@somo/pda-layouts-regular component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      children: <div>foo</div>,
      hero: {
        heading: 'I need a hero!!',
        text: "I'm holding out for a hero 'til the end of the night ",
        cta: "I'm a cta",
      },
      footer: {
        title: 'Our smart technology needs a smart meter.',
        subTitle: "Check you're on the latest smart meter and start taking control your energy.",
        copyright: '2019 © Socket Energy. All rights reserved.',
      },
    };
  });

  it('should render Regular Layout', () => {
    wrapper = shallow(<RegularLayout {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should render a hero', () => {
    props.hero = <PageHero i18n={props.hero} />;
    wrapper = shallow(<RegularLayout {...props} />);
    expect(wrapper.find('PageHero').length).toBe(1);
  });

  it('should render a footer', () => {
    props.hero = <Footer i18n={props.footer} />;
    wrapper = shallow(<RegularLayout {...props} />);
    expect(wrapper.find('Footer').length).toBe(1);
  });
});
