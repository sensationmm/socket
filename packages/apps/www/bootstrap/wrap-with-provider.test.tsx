import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
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
  });
});
