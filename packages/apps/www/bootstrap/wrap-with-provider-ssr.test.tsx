import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import WrapWithProviderSSR from './wrap-with-provider-ssr';

describe('@somo/oxd-apps-www', () => {
  describe('bootstrap/wrap-with-provider-ssr', () => {
    it("renders it's element prop", () => {
      const Children = () => <div />;
      const wrapper = shallow(<WrapWithProviderSSR element={Children} />);
      expect(wrapper.find(Children)).toBeDefined();
    });
    it('renders a redux context provider', () => {
      const Children = () => <div />;
      const wrapper = shallow(<WrapWithProviderSSR element={Children} />);
      expect(wrapper.find(Provider)).toBeDefined();
    });
  });
});
