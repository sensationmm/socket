import { shallow } from 'enzyme';
import * as React from 'react';

import { ContentBoxStyle } from '@somo/pda-components-content-box/src';
import SwitchingStep from './switching-step.component';

describe('@somo/pda-pages-home switching-step component', () => {
  let component;
  let props;

  it('should a content box', () => {
    props = {
      style: ContentBoxStyle.Default,
    };
    component = shallow(<SwitchingStep {...props} />);
    expect(component.find('ContentBox').length).toEqual(1);
  });

  it('should render an header text if header prop is truthy', () => {
    props = {
      style: ContentBoxStyle.Default,
      header: 'First step',
    };
    component = shallow(<SwitchingStep {...props} />);
    expect(
      component
        .find('Text')
        .childAt(0)
        .text(),
    ).toEqual(props.header);
  });

  it('should render a body text if body prop is truthy', () => {
    props = {
      style: ContentBoxStyle.Default,
      body: 'Info',
    };
    component = shallow(<SwitchingStep {...props} />);
    expect(
      component
        .find('Text')
        .childAt(0)
        .text(),
    ).toEqual(props.body);
  });

  it('should render an outline button text if cta prop is truthy', () => {
    props = {
      style: ContentBoxStyle.Default,
      cta: 'Click here',
    };
    component = shallow(<SwitchingStep {...props} />);
    expect(
      component
        .find('OutlineButton')
        .childAt(0)
        .text(),
    ).toEqual(props.cta);
  });
});
