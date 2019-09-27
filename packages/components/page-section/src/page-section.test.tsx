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

    expect(wrapper.find('.component').hasClass('primarypattern')).toEqual(true);
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

  it('renders background image style container', () => {
    props = {
      style: PageSectionStyle.Image,
      bgImage: 'filestub',
    };
    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.component').props().style.backgroundImage).toEqual('url(filestub)');
  });
});
