import { mount, shallow } from 'enzyme';
import * as React from 'react';
import wait from 'waait';

import { LogoutPage } from './logout.component';

jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));
jest.mock('@apollo/react-hooks', () => ({
  useApolloClient: jest.fn().mockReturnValue({
    clearStore: jest.fn().mockImplementation(() => Promise.resolve()),
  }),
}));

describe('@somo/pda-pages-logout', () => {
  const props = {
    actions: {
      logout: jest.fn(),
    },
  };
  let component;

  it('should render the component successfully', () => {
    component = shallow(<LogoutPage {...props} />);
    expect(component).toBeDefined();
  });

  it('should call the logout action on mount', async () => {
    mount(<LogoutPage {...props} />);
    await wait(0);
    expect(props.actions.logout).toHaveBeenCalled();
  });
});