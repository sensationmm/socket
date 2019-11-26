import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Component from '.';

describe('@somo/pda-components-app-template component', () => {
  let wrapper;
  let props;

  const store = configureMockStore();

  beforeEach(() => {
    props = {
      children: 'text goes here',
    };
    wrapper = shallow(
      <Provider store={store({})}>
        <Component {...props} />
      </Provider>,
    );
  });

  it('should not throw', () => {
    expect(wrapper).toBeDefined();
  });
});
