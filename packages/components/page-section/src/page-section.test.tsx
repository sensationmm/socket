import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';
import { PageSectionStyle } from './page-section.component';

describe('@somo/pda-components-page-section component', () => {
  let wrapper;
  let props;
  const content = '<div>Hi this is the content</div>';

  it('should render without error', () => {
    wrapper = shallow(<Component {...props}>{content}</Component>);
    expect(wrapper).toBeDefined();

    expect(wrapper.find('.component').text()).toEqual(content);
  });

  it('should render the given prop element as the html tag', () => {
    props = {
      element: 'section',
    };
    wrapper = shallow(<Component {...props}>{content}</Component>);
    expect(wrapper.find(props.element)).toHaveLength(1);
  });

  it('renders primary style container', () => {
    props = {
      style: PageSectionStyle.Primary,
      bgImage: 'filestub',
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').hasClass('primary')).toEqual(true);
    expect(wrapper.find('.component').props().style.backgroundImage).toEqual(undefined);
  });

  it('renders primary pattern style container', () => {
    props = {
      style: PageSectionStyle.PrimaryPattern,
      bgImage: 'filestub',
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').hasClass('primaryPattern')).toEqual(true);
    expect(wrapper.find('.component').props().style.backgroundImage).toEqual(undefined);
  });

  it('renders secondary style container', () => {
    props = {
      style: PageSectionStyle.Secondary,
      bgImage: 'filestub',
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').hasClass('secondary')).toEqual(true);
    expect(wrapper.find('.component').props().style.backgroundImage).toEqual(undefined);
  });

  it('renders tertiary style container', () => {
    props = {
      style: PageSectionStyle.Tertiary,
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').hasClass('tertiary')).toEqual(true);
  });

  it('renders tertiary pattern style container', () => {
    props = {
      style: PageSectionStyle.TertiaryPattern,
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').hasClass('tertiaryPattern')).toEqual(true);
  });

  it('renders quaternary style container', () => {
    props = {
      style: PageSectionStyle.Quaternary,
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').hasClass('quaternary')).toEqual(true);
  });

  it('renders quaternary pattern style container', () => {
    props = {
      style: PageSectionStyle.QuaternaryPattern,
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').hasClass('quaternaryPattern')).toEqual(true);
  });

  it('renders background image style container', () => {
    props = {
      style: PageSectionStyle.Image,
      bgImage: 'filestub',
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').props().style.backgroundImage).toEqual('url(filestub)');
  });

  it('renders a narrow class if isNarrow prop value is truthy', () => {
    props = {
      style: PageSectionStyle.Primary,
      isNarrow: true,
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').hasClass('narrow')).toEqual(true);
  });
});
