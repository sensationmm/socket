import { mount, shallow } from 'enzyme';
import * as React from 'react';
import wait from 'waait';

import { LogoutPage } from './logout.component';
import { ILogoutPageProps } from './logout.component';

jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));
jest.mock('@apollo/react-hooks', () => ({
  useApolloClient: jest.fn().mockReturnValue({
    clearStore: jest.fn().mockImplementation(() => Promise.resolve()),
  }),
}));
jest.mock('@somo/pda-components-button/src', () => ({
  Secondary: () => <button>mock</button>,
  ButtonTypes: {
    internalLink: 'internalLink',
  },
}));

describe('@somo/pda-pages-logout', () => {
  let component;
  const props: ILogoutPageProps = {
    actions: {
      logout: jest.fn(),
    },
  };

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
