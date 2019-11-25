import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Component from '.';

describe('@somo/pda-components-app-template component', () => {
  let wrapper;

  const store = configureMockStore();

  it('should render a cookie notice if hideCookieNotice prop value is falsy', () => {
    const props = {
      children: 'text goes here',
    };
    wrapper = shallow(<Component {...props} />);
    expect(wrapper.find('CookieNotice').length).toEqual(1);
    wrapper = shallow(
      <Provider store={store({})}>
        <Component {...props} />
      </Provider>,
    );
  });

  it('should not render a CookieNotice component if hideCookieNotice prop value is truthy', () => {
    const props = {
      children: 'text goes here',
      hideCookieNotice: true,
    };
    wrapper = shallow(
      <Provider store={store({})}>
        <Component {...props} />
      </Provider>,
    );
    expect(wrapper.find('CookieNotice').length).toEqual(0);
  });
});
