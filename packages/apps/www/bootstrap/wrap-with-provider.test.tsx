import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';

import { Provider as Apollo } from '@somo/pda-graphql-apollo/src';
import WrapWithProvider from './wrap-with-provider';

describe('@somo/pda-apps-www', () => {
  describe('bootstrap/wrap-with-provider', () => {
    it("renders it's element prop", () => {
      const Children = () => <div />;
      const wrapper = shallow(<WrapWithProvider element={Children} />);
      expect(wrapper.find(Children)).toBeDefined();
    });
    it('renders a redux context provider', () => {
      const Children = () => <div />;
      const wrapper = shallow(<WrapWithProvider element={Children} />);
      expect(wrapper.find(Provider)).toBeDefined();
    });
    it('renders an Apollo provider', () => {
      const Children = () => <div />;
      const wrapper = shallow(<WrapWithProvider element={Children} />);
      expect(wrapper.find(Apollo)).toBeDefined();
    });
  });
});
