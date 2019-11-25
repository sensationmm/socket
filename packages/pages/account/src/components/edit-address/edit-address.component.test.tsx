import { MockedProvider } from '@apollo/react-testing';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { mount } from 'enzyme';
import * as React from 'react';
import wait from 'waait';

import { clearFormState } from '@somo/pda-utils-form/src';
import { GET_USER_QUERY } from '../../account.component';
import { EditAddress, UPDATE_ADDRESS } from './edit-address.component';

jest.mock('@somo/pda-utils-form/src', () => ({
  initFormState: jest.fn(),
  clearFormState: jest.fn(),
  validateForm: jest
    .fn()
    .mockReturnValueOnce(false)
    .mockReturnValue(true),
  renderForm: jest.fn().mockReturnValue(<span />),
}));

describe('EditAddress component', () => {
  const props = {
    userId: 'u1',
    token: 't123',
    tokenType: 'Bearer',
    form: {
      values: {
        address1: '138 Regents Park Road',
        address2: 'flat 3',
        address4: 'Camden',
        address5: 'London',
        postcode: 'NW1 8XL',
      },
      errors: {},
      valid: {},
      showErrorMessage: false,
    },
  };
  const userData = {
    user: {
      __typename: 'User',
      id: 'u1',
      personalDetails: {
        __typename: 'PersonalDetails',
        name: 'John Smith',
        email: 'john.smith@somoglobal.com',
        phone: '07563458747',
        accountNumber: '123234556',
        correspondenceAddress: '1180 Royal College Street, NW1 0TH',
        detailedCorrespondenceAddress: {
          __typename: 'Address',
          address1: '1180 Royal College Street',
          address2: 'flat 1',
          address4: 'London',
          address5: 'London',
          postcode: 'NW1 0TH',
        },
        supplyAddress: '147 Regents Park Road',
      },
      paymentDetails: {
        __typename: 'PaymentDetails',
        accountName: 'John Smith',
        accountNumber: '534534534',
        sortCode: '05-34-56',
        monthlyPaymentDate: '15th',
      },
      productDetails: {
        __typename: 'ProductDetails',
        electricity: {
          __typename: 'ProductInformation',
          name: 'Electricity 1-Rate | Fixed - 12 | 3012',
          endDate: '',
          TIL: {
            __typename: 'ProductTilInformation',
            tariff: {
              __typename: 'ProductTilItem',
              itemValue: 'Electricity 1-Rate | Fixed - 12 | 3012',
              inclVAT: '',
            },
            contractType: { __typename: 'ProductTilItem', itemValue: 'Fixed Rate', inclVAT: '' },
            paymentMethod: { __typename: 'ProductTilItem', itemValue: 'Variable Direct Debit', inclVAT: '' },
            unitRate: { __typename: 'ProductTilItem', itemValue: '', inclVAT: '11.55p/kWh' },
            standingChargeDd: { __typename: 'ProductTilItem', itemValue: '', inclVAT: '7.50p/day (£27.36/year)' },
            billingFrequency: { __typename: 'ProductTilItem', itemValue: 'Monthly', inclVAT: '' },
          },
        },
        gas: {
          __typename: 'ProductInformation',
          name: 'Gas - 12M | 2012',
          endDate: '',
          TIL: {
            __typename: 'ProductTilInformation',
            tariff: { __typename: 'ProductTilItem', itemValue: 'Gas - 12M | 2012', inclVAT: '' },
            contractType: { __typename: 'ProductTilItem', itemValue: 'Fixed Rate', inclVAT: '' },
            paymentMethod: { __typename: 'ProductTilItem', itemValue: 'Variable Direct Debit', inclVAT: '' },
            unitRate: { __typename: 'ProductTilItem', itemValue: '', inclVAT: '11.55p/kWh' },
            standingChargeDd: { __typename: 'ProductTilItem', itemValue: '', inclVAT: '7.50p/day (£27.36/year)' },
            billingFrequency: { __typename: 'ProductTilItem', itemValue: 'Monthly', inclVAT: '' },
          },
        },
      },
    },
  };
  const mutationResponse = {
    __typename: 'User',
    id: 'u1',
    personalDetails: {
      __typename: 'PersonalDetails',
      correspondenceAddress: '145 Regents Park Road',
      detailedCorrespondenceAddress: {
        __typename: 'Address',
        ...props.form.values,
      },
    },
  };
  const mocks = [
    {
      request: {
        query: UPDATE_ADDRESS,
        variables: {
          id: props.userId,
          address: props.form.values,
        },
        context: {
          headers: {
            Authorization: `${props.tokenType} ${props.token}`,
          },
        },
      },
      result: {
        data: {
          updateCorrespondenceAddress: mutationResponse,
        },
      },
    },
  ];
  let cache;

  beforeEach(() => {
    cache = new InMemoryCache({ addTypename: true });
  });

  it('should not run update address mutation on submit if the form is invalid', async () => {
    cache.writeQuery({
      query: GET_USER_QUERY,
      variables: { id: props.userId },
      data: userData,
    });

    const component = mount(
      <MockedProvider mocks={mocks} addTypename={true} cache={cache}>
        <EditAddress {...props} />
      </MockedProvider>,
    );

    component.find('button').simulate('click');
    await wait(0);

    expect(cache.readQuery({ query: GET_USER_QUERY, variables: { id: props.userId } })).toMatchObject({
      user: userData.user,
    });
  });

  it('should run update address mutation but not update cache on submit if cache is empty', async () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={true} cache={cache}>
        <EditAddress {...props} />
      </MockedProvider>,
    );

    component.find('button').simulate('click');
    await wait(0);

    expect(() => cache.readQuery({ query: GET_USER_QUERY, variables: { id: props.userId } })).toThrow();
  });

  it('should run update address mutation and update on submit if the form is valid and cache is not empty', async () => {
    cache.writeQuery({
      query: GET_USER_QUERY,
      variables: { id: props.userId },
      data: userData,
    });

    const component = mount(
      <MockedProvider mocks={mocks} addTypename={true} cache={cache}>
        <EditAddress {...props} />
      </MockedProvider>,
    );

    component.find('button').simulate('click');
    await wait(0);

    expect(cache.readQuery({ query: GET_USER_QUERY, variables: { id: props.userId } })).toMatchObject({
      user: {
        id: 'u1',
        personalDetails: {
          correspondenceAddress: '145 Regents Park Road',
          detailedCorrespondenceAddress: {
            ...props.form.values,
          },
        },
      },
    });
  });

  it('should clear form on unmount', () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={true} cache={cache}>
        <EditAddress {...props} />
      </MockedProvider>,
    );

    component.unmount();
    expect(clearFormState).toHaveBeenCalled();
  });
});
