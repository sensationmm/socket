import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

export default (state) => (story) => {
  const mockStore = configureMockStore();

  return <Provider store={mockStore(state)}>{story()}</Provider>;
};
