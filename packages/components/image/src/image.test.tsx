import { shallow } from 'enzyme';
import * as React from 'react';

import Image from '.';

describe('Image', () => {
  it('should render', () => {
    const component = shallow(<Image src="foo.bar" />);
    expect(component).toBeDefined();
  });

  it('renders a LazyImage component if src and isLazy props values are truthy and there is no error', () => {
    const component = shallow(<Image isLazy={true} src="foo.bar" i18n={{ noImage: 'foo' }} />);
    expect(component.find('LazyImage').exists()).toBeTruthy();
  });

  it('renders an image component if src prop value is truthy, isLazy prop value is falsy and there is no error', () => {
    const component = shallow(<Image isLazy={false} src="foo.bar" i18n={{ noImage: 'foo' }} />);
    expect(component.find('LazyImage').exists()).toBeFalsy();
    expect(component.find('img').exists()).toBeTruthy();
  });

  it('renders a Holding image if src prop value is falsy', () => {
    const component = shallow(<Image isLazy={false} src="" i18n={{ noImage: 'foo' }} />);
    expect(component.find('HoldingImage').exists()).toBeTruthy();
  });

  it('renders a Holding image if src and isLazy props values are truthy and there was a loading error', () => {
    const component = shallow(<Image isLazy={true} src="foo.bar" i18n={{ noImage: 'foo' }} />);
    component.find('LazyImage').prop('onError')!({} as any);
    component.update();
    expect(component.find('LazyImage').exists()).toBeFalsy();
    const holdingImage: any = component.find('HoldingImage');
    expect(holdingImage.exists()).toBeTruthy();
    expect(holdingImage.props().text).toEqual('foo');
  });

  it('should render a custom class if className prop value is truthy', () => {
    const component = shallow(<Image src="foo.bar" className="customClass" i18n={{ noImage: 'foo' }} />);
    expect(component.find('.customClass')).toHaveLength(1);
  });

  it('should render a cmsContent class if isCMSContent prop value is truthy', () => {
    const component = shallow(<Image src="foo.bar" i18n={{ noImage: 'foo' }} isCMSContent={true} />);
    expect(component.find('.cmsContent')).toHaveLength(1);
  });
});
