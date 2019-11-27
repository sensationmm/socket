import { shallow } from 'enzyme';
import * as React from 'react';

import ActionPaneBtn, { IconTypes } from './action-pane-button.component';

describe('@somo/pda-components-action-pane-button', () => {
  it('should render an icon if icon prop value is defined', () => {
    const wrapper = shallow(<ActionPaneBtn icon={IconTypes.edit} />);
    expect(wrapper.find('SVG').length).toEqual(1);
  });

  it('should not render an icon if icon prop value is not defined', () => {
    const wrapper = shallow(<ActionPaneBtn />);
    expect(wrapper.find('SVG').length).toEqual(0);
  });

  it('should render the text prop if text prop value is truthy', () => {
    const wrapper = shallow(<ActionPaneBtn text="edit" />);
    expect(wrapper.find('Text').length).toEqual(1);
  });

  it('should not render the text prop if text prop value is truthy', () => {
    const wrapper = shallow(<ActionPaneBtn />);
    expect(wrapper.find('Text').length).toEqual(0);
  });
});
