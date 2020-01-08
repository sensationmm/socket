import { shallow } from 'enzyme';
import * as React from 'react';

import Footer from '@somo/pda-components-footer/src';
import OnboardingLayout from '.';

describe('@somo/pda-layouts-onboarding component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      hero: {
        title: 'Title',
        subtitle: 'Subtitle',
      },
      children: <div>foo</div>,
    };
  });

  it('should render Onboarding Layout', () => {
    wrapper = shallow(<OnboardingLayout {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should render onboarding header', () => {
    wrapper = shallow(<OnboardingLayout {...props} />);
    const header = wrapper.find('[data-test="onboarding-header"]');
    expect(header.length).toBe(1);
  });

  it('should render a footer', () => {
    props.hero = <Footer />;
    wrapper = shallow(<OnboardingLayout {...props} />);
    expect(wrapper.find('Footer').length).toBe(1);
  });
});
