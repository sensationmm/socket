import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import withForm, { mapStateToProps } from './with-form';

describe('withForm hoc', () => {
  const state = {
    form: {
      values: {
        someField: 'some value',
      },
      errors: {
        someField: 'some error',
      },
      valid: {},
      showErrorMessage: true,
    },
  };
  const createMockStore = configureMockStore();

  describe('render', () => {
    it('should render a connected component and pass the form state as a prop', () => {
      const store = createMockStore(state);
      const Component = () => <span />;
      const WrappedComponent = withForm(Component);
      const wrapper = mount(
        <Provider store={store}>
          <WrappedComponent />
        </Provider>,
      );
      expect(wrapper.find(Component).props()).toMatchObject({
        form: state.form,
      });
    });
  });

  describe('mapStateToProps', () => {
    it('should return state form props', () => {
      expect(mapStateToProps(state)).toEqual({
        form: state.form,
      });
    });
  });
});
