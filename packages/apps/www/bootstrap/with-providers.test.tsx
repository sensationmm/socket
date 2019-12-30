import { shallow } from 'enzyme';
import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { ApolloProvider } from './apollo-provider.component';
import { WithProviders } from './with-providers';

describe('@somo/pda-apps-www', () => {
  describe('bootstrap/wrap-with-provider', () => {
    it("renders it's element prop", () => {
      const Children = () => <div />;
      const wrapper = shallow(<WithProviders element={Children} />);
      expect(wrapper.find(Children)).toBeDefined();
    });

    it('renders a redux context provider', () => {
      const Children = () => <div />;
      const wrapper = shallow(<WithProviders element={Children} />);
      expect(wrapper.find(ReduxProvider)).toBeDefined();
    });

    it('renders an Apollo provider', () => {
      const Children = () => <div />;
      const wrapper = shallow(<WithProviders element={Children} />);
      expect(wrapper.find(ApolloProvider)).toBeDefined();
    });
  });
});
