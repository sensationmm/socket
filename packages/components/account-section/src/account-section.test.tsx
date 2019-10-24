import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

describe('@somo/pda-components-account-section component', () => {
  let wrapper;
  const content = '<div>Hi this is the content</div>';

  it('should render without error', () => {
    const props = {
      title: 'Preferences',
    };
    wrapper = shallow(<Component {...props}>{content}</Component>);
    expect(wrapper).toBeDefined();

    expect(wrapper.find('.accountSection .content').text()).toEqual(content);
  });

  it('should render the title', () => {
    const props = {
      title: 'Preferences',
    };

    wrapper = shallow(<Component {...props} />);

    expect(
      wrapper
        .find('Text')
        .at(0)
        .childAt(0)
        .text(),
    ).toEqual(props.title);
  });

  it('should render a subtitle if subtitle prop value is truthy', () => {
    const props = {
      title: 'Preferences',
      subtitle: 'Stay in the loop',
    };

    wrapper = shallow(<Component {...props} />);

    expect(
      wrapper
        .find('Text')
        .at(1)
        .childAt(0)
        .text(),
    ).toEqual(props.subtitle);
  });

  it('should render a disabled class name if disabled prop value is truthy', () => {
    const props = {
      title: 'Preferences',
      disabled: true,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.accountSection').hasClass('disabled')).toEqual(true);
  });

  it('should render an additional class name if it as passed as a props', () => {
    const props = {
      title: 'Preferences',
      className: 'additionalClassName',
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.accountSection').hasClass('additionalClassName')).toEqual(true);
  });
});
