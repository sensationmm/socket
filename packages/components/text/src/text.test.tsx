import { shallow } from 'enzyme';
import * as React from 'react';

import Text, { ColorStyles, TextStyles } from '.';

describe('@somo/pda-components-text component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      children: 'text goes here',
      element: 'h3',
    };
    wrapper = shallow(<Text {...props} />);
  });

  it('should render the given prop element as the html tag', () => {
    expect(wrapper.find(props.element)).toHaveLength(1);
  });

  it('should render the given child in the html tag', () => {
    expect(wrapper.find(props.element).text()).toEqual(props.children);
  });

  it('should render the custom class name ', () => {
    props.className = 'customClass';
    wrapper = shallow(<Text {...props} />);
    expect(wrapper.find(`.${props.className}`)).toHaveLength(1);
  });

  it('should render the color class secondary ', () => {
    props.color = ColorStyles.secondary;
    wrapper = shallow(<Text {...props} />);
    expect(wrapper.find(`.${props.color}`)).toHaveLength(1);
  });

  it('should render the type class secondary ', () => {
    props.type = TextStyles.h1;
    wrapper = shallow(<Text {...props} />);
    expect(wrapper.find(`.${props.type}`)).toHaveLength(1);
  });

  it('should render a cmsContent class if isCMSContent prop value is truthy ', () => {
    props.type = TextStyles.h1;
    props.isCMSContent = true;
    wrapper = shallow(<Text {...props} />);
    expect(wrapper.find('.cmsContent')).toHaveLength(1);
  });
});
