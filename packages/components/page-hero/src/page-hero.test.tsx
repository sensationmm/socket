import { shallow } from 'enzyme';
import * as React from 'react';

import { Secondary as Button } from '@somo/pda-components-button/src';
import Component from '.';

describe('@somo/pda-components-page-hero component', () => {
  let wrapper;
  let props;

  const headingString = 'Heading';
  const textString = 'Text goes here text goes here text goes here';
  const ctaString = 'Click here';
  const onClickMock = jest.fn();

  it('should render without error', () => {
    props = {
      heading: headingString,
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should render full content', () => {
    props = {
      heading: headingString,
      text: textString,
      cta: ctaString,
      onClick: onClickMock,
    };

    wrapper = shallow(<Component {...props} />);

    expect(
      wrapper
        .find(`[data-test="page-hero-heading"]`)
        .dive()
        .text(),
    ).toEqual(headingString);
    expect(
      wrapper
        .find(`[data-test="page-hero-text"]`)
        .dive()
        .text(),
    ).toEqual(textString);
    expect(wrapper.find(Button).props().children).toEqual(ctaString);
    expect(wrapper.find(Button).props().onClick).toEqual(onClickMock);
  });

  it('should render heading and text only', () => {
    props = {
      heading: headingString,
      text: textString,
    };

    wrapper = shallow(<Component {...props} />);

    expect(
      wrapper
        .find(`[data-test="page-hero-heading"]`)
        .dive()
        .text(),
    ).toEqual(headingString);
    expect(
      wrapper
        .find(`[data-test="page-hero-text"]`)
        .dive()
        .text(),
    ).toEqual(textString);
    expect(wrapper.find(Button).exists()).toBe(false);
  });

  it('should render heading and cta only', () => {
    props = {
      heading: headingString,
      cta: ctaString,
      onClick: onClickMock,
    };

    wrapper = shallow(<Component {...props} />);

    expect(
      wrapper
        .find(`[data-test="page-hero-heading"]`)
        .dive()
        .text(),
    ).toEqual(headingString);
    expect(wrapper.find(`[data-test="page-hero-text"]`).exists()).toBe(false);
    expect(wrapper.find(Button).props().children).toEqual(ctaString);
    expect(wrapper.find(Button).props().onClick).toEqual(onClickMock);
  });

  it('should render heading only', () => {
    props = {
      heading: headingString,
    };

    wrapper = shallow(<Component {...props} />);

    expect(
      wrapper
        .find(`[data-test="page-hero-heading"]`)
        .dive()
        .text(),
    ).toEqual(headingString);
    expect(wrapper.find(`[data-test="page-hero-text"]`).exists()).toBe(false);
    expect(wrapper.find(Button).exists()).toBe(false);
  });
});
