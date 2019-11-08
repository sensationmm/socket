import { mount } from 'enzyme';
import * as React from 'react';

import { MockedProvider } from '@apollo/react-testing';
import { GraphQLError } from 'graphql';
import wait from 'waait';
import { AccountPage, GET_USER_QUERY } from './account.component';
import PaymentDetails from './components/payment-details.component';
import PersonalDetails from './components/personal-details.component';

jest.mock('@somo/pda-components-user-switch/src', () => () => <span />);

describe('@somo/pda-pages-account', () => {
  const props = {
    userId: 'u1',
    token: 't123',
    tokenType: 'Bearer',
  };

  it('should pass a loading prop to the account sections on query start', () => {
    const component = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <AccountPage {...props} />
      </MockedProvider>,
    );

    expect(
      component
        .find('QuerySection')
        .at(0)
        .props(),
    ).toMatchObject({
      loading: true,
      Component: PersonalDetails,
    });
    expect(
      component
        .find('QuerySection')
        .at(1)
        .props(),
    ).toMatchObject({
      loading: true,
      Component: PaymentDetails,
    });
  });

  it('should pass an error prop to the account sections on query fail', async () => {
    const mocks = [
      {
        request: {
          query: GET_USER_QUERY,
          variables: {
            id: props.userId,
          },
          context: {
            headers: {
              Authorization: `${props.tokenType} ${props.token}`,
            },
          },
        },
        result: {
          errors: [new GraphQLError('Loading error')],
        },
      },
    ];
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AccountPage {...props} />
      </MockedProvider>,
    );
    await wait(0);

    component.update();
    expect(
      component
        .find('QuerySection')
        .at(0)
        .props(),
    ).toMatchObject({
      error: true,
    });
    expect(
      component
        .find('QuerySection')
        .at(1)
        .props(),
    ).toMatchObject({
      error: true,
    });
  });

  it('should pass necessary values to the account sections on query success', async () => {
    const user = {
      id: '15',
      personalDetails: {
        name: 'John Smith',
        email: 'john.smith@somoglobal.com',
        phone: '07563458747',
        accountNumber: '123234556',
        correspondenceAddress: '145 Regents Park Road',
        supplyAddress: '147 Regents Park Road',
      },
      paymentDetails: {
        accountName: 'John Smith',
        accountNumber: '534534534',
        sortCode: '05-34-56',
        monthlyPaymentDate: '15th',
      },
    };
    const mocks = [
      {
        request: {
          query: GET_USER_QUERY,
          variables: {
            id: props.userId,
          },
          context: {
            headers: {
              Authorization: `${props.tokenType} ${props.token}`,
            },
          },
        },
        result: {
          data: {
            user,
          },
        },
      },
    ];
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AccountPage {...props} />
      </MockedProvider>,
    );
    await wait(0);

    component.update();
    expect(
      component
        .find('QuerySection')
        .at(0)
        .props(),
    ).toMatchObject({
      values: user.personalDetails,
    });
    expect(
      component
        .find('QuerySection')
        .at(1)
        .props(),
    ).toMatchObject({
      values: user.paymentDetails,
    });
  });
});
