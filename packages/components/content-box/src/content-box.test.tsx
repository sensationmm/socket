import { shallow } from 'enzyme';
import * as React from 'react';

import Component, { ContentBoxStyle } from '.';

describe('@somo/pda-components-content-box component', () => {
  let wrapper;
  let props = {};
  const content = '<div>Hi this is the content</div>';

  it('should render without error', () => {
    wrapper = shallow(<Component {...props}>{content}</Component>);
    expect(wrapper).toBeDefined();

    expect(wrapper.find('.contentBox').text()).toEqual(content);
  });

  it('should render primary style container', () => {
    props = {
      style: ContentBoxStyle.Primary,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').hasClass('primary')).toEqual(true);
  });

  it('should render primary pattern style container', () => {
    props = {
      style: ContentBoxStyle.PrimaryPattern,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').hasClass('primaryPattern')).toEqual(true);
  });

  it('should render secondary style container', () => {
    props = {
      style: ContentBoxStyle.Secondary,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').hasClass('secondary')).toEqual(true);
  });

  it('should render secondary pattern style container', () => {
    props = {
      style: ContentBoxStyle.SecondaryPattern,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').hasClass('secondaryPattern')).toEqual(true);
  });

  it('should render tertiary style container', () => {
    props = {
      style: ContentBoxStyle.Tertiary,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').hasClass('tertiary')).toEqual(true);
  });

  it('should render tertiary pattern style container', () => {
    props = {
      style: ContentBoxStyle.TertiaryPattern,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').hasClass('tertiaryPattern')).toEqual(true);
  });

  it('should render a vertically centered container', () => {
    props = {
      style: ContentBoxStyle.Default,
      isVerticallyCentered: true,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').hasClass('verticallyCentered')).toEqual(true);
  });

  it('should render an horizontally centered container', () => {
    props = {
      style: ContentBoxStyle.Default,
      isHorizontallyCentered: true,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').hasClass('horizontallyCentered')).toEqual(true);
  });

  it('should have height set to auto by default', () => {
    props = {
      style: ContentBoxStyle.Default,
      isHorizontallyCentered: true,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').prop('style')).toMatchObject({ height: 'auto' });
  });

  it('should set container height', () => {
    props = {
      style: ContentBoxStyle.Default,
      isHorizontallyCentered: true,
      height: 800,
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').prop('style')).toMatchObject({ height: 800 });
  });

  it('should render an additional class name if it as passed as a props', () => {
    props = {
      className: 'additionalClassName',
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.contentBox').hasClass('additionalClassName')).toEqual(true);
  });
});
