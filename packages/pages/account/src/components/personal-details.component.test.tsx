import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import { GraphQLError } from 'graphql';
import React from 'react';
import wait from 'waait';
import Component, { GET_USER_QUERY } from './personal-details.component';

describe('PersonalDetails component', () => {
  const props = {
    userId: 'u1',
    token: 't123',
    tokenType: 'Bearer',
  };

  it('should render a loading message on query start', () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Component {...props} />
      </MockedProvider>,
    );

    expect(getByText('Loading...')).toBeDefined();
  });

  it('should render an error message on query fail', async () => {
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
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Component {...props} />
      </MockedProvider>,
    );
    await wait(0);

    expect(getByText(/Something happened/)).toBeDefined();
  });

  it('should render user data on query success', async () => {
    const user = {
      id: '15',
      name: 'John Smith',
      email: 'john.smith@somoglobal.com',
      phone: '07563458747',
      accountNumber: '123234556',
      correspondenceAddress: '145 Regents Park Road',
      supplyAddress: '147 Regents Park Road',
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
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Component {...props} />
      </MockedProvider>,
    );
    await wait(0);

    expect(getByText(user.name)).toBeDefined();
    expect(getByText(user.email)).toBeDefined();
    expect(getByText(user.phone)).toBeDefined();
    expect(getByText(user.accountNumber)).toBeDefined();
    expect(getByText(user.correspondenceAddress)).toBeDefined();
    expect(getByText(user.supplyAddress)).toBeDefined();
  });
});
