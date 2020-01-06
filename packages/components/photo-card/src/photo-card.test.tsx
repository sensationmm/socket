import { shallow } from 'enzyme';
import * as React from 'react';

import Image from '@somo/pda-components-image/src';
import Component, { PhotoCardStyle } from '.';

describe('@somo/pda-components-photo-card component', () => {
  let wrapper;
  let props = {
    style: PhotoCardStyle.Default,
    image: '/path-to-image.jpg',
    text: '',
  };

  it('should render without error', () => {
    wrapper = shallow(<Component {...props} />);
    expect(wrapper).toBeDefined();

    expect(wrapper.find('.photoCard').length).toEqual(1);
  });

  it('should render primary style container', () => {
    props = {
      style: PhotoCardStyle.Primary,
      image: '/path-to-image.jpg',
      text: '',
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.photoCard').hasClass('primary')).toEqual(true);
  });

  it('should render secondary style container', () => {
    props = {
      style: PhotoCardStyle.Secondary,
      image: '/path-to-image.jpg',
      text: '',
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.photoCard').hasClass('secondary')).toEqual(true);
  });

  it('should render a background image if text exists', () => {
    props = {
      style: PhotoCardStyle.Default,
      image: '/path-to-image.jpg',
      text: 'Hello',
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.photoCard').props().style).toMatchObject({
      backgroundImage: `url(${props.image})`,
    });
  });

  it('should render an image if no text exists', () => {
    props = {
      style: PhotoCardStyle.Default,
      image: '/path-to-image.jpg',
      text: '',
    };

    wrapper = shallow(<Component {...props} />);

    expect(wrapper.find('.photoCard').props().style).toMatchObject({
      backgroundImage: '',
    });
    expect(wrapper.find(Image).props().src).toEqual(props.image);
  });

  it('should render a text component if text prop value is truthy', () => {
    props = {
      style: PhotoCardStyle.Default,
      image: '/path-to-image.jpg',
      text: 'Info',
    };

    wrapper = shallow(<Component {...props} />);

    expect(
      wrapper
        .find('Text')
        .childAt(0)
        .text(),
    ).toEqual(props.text);
  });
});
