import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { MockedProvider } from '@apollo/react-testing';
import { GraphQLError } from 'graphql';
import wait from 'waait';
import { AccountPage, GET_USER_QUERY } from './account.component';
import ContactPreferences from './components/contact-preferences/contact-preferences.component';
import NoDirectDebit from './components/no-direct-debit/no-direct-debit.component';
import PaymentDetails from './components/payment-details/payment-details.component';
import PersonalDetails from './components/personal-details/personal-details.component';
import ProductDetails from './components/product-details/product-details.component';

jest.mock('@somo/pda-components-user-switch/src', () => () => <span />);
jest.mock('./components/contact-preferences/contact-preferences.component', () => () => <span />);

describe('@somo/pda-pages-account', () => {
  const mockStore = configureMockStore()({
    notification: [],
  });

  const props = {
    userId: 'u1',
  };

  it('should pass a loading prop to the account sections on query start', () => {
    const component = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <Provider store={mockStore}>
          <AccountPage {...props} />
        </Provider>
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
      Component: ProductDetails,
    });
    expect(
      component
        .find('QuerySection')
        .at(2)
        .props(),
    ).toMatchObject({
      loading: true,
      Component: PaymentDetails,
      ErrorComponent: NoDirectDebit,
    });
    expect(
      component
        .find('QuerySection')
        .at(3)
        .props(),
    ).toMatchObject({
      loading: true,
      Component: ContactPreferences,
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
        },
        result: {
          errors: [new GraphQLError('Loading error')],
        },
      },
    ];
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={mockStore}>
          <AccountPage {...props} />
        </Provider>
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
    expect(
      component
        .find('QuerySection')
        .at(2)
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
        detailedCorrespondenceAddress: {
          address1: '145 Regents Park Road',
          address2: '',
          address4: '',
          address5: '',
          postcode: 'NW1 8XL',
        },
        supplyAddress: '147 Regents Park Road',
      },
      paymentDetails: {
        accountName: 'John Smith',
        accountNumber: '534534534',
        sortCode: '05-34-56',
        monthlyPaymentDate: '15th',
      },
      productDetails: {
        electricity: {
          __typename: 'ProductInformation',
          name: 'Electricity 1-Rate | Fixed - 12 | 3012',
          endDate: '',
          TIL: {
            tariff: { itemValue: 'Electricity 1-Rate | Fixed - 12 | 3012', inclVAT: '' },
            contractType: { itemValue: 'Fixed Rate', inclVAT: '' },
            paymentMethod: { itemValue: 'Variable Direct Debit', inclVAT: '' },
            unitRate: { itemValue: '', inclVAT: '11.55p/kWh' },
            standingChargeDd: { itemValue: '', inclVAT: '7.50p/day (£27.36/year)' },
            billingFrequency: { itemValue: 'Monthly', inclVAT: '' },
          },
        },
        gas: {
          __typename: 'ProductInformation',
          name: 'Gas - 12M | 2012',
          endDate: '',
          TIL: {
            tariff: { itemValue: 'Gas - 12M | 2012', inclVAT: '' },
            contractType: { itemValue: 'Fixed Rate', inclVAT: '' },
            paymentMethod: { itemValue: 'Variable Direct Debit', inclVAT: '' },
            unitRate: { itemValue: '', inclVAT: '11.55p/kWh' },
            standingChargeDd: { itemValue: '', inclVAT: '7.50p/day (£27.36/year)' },
            billingFrequency: { itemValue: 'Monthly', inclVAT: '' },
          },
        },
      },
      contactPreferences: {
        contactId: 1,
        email: true,
        sms: true,
        post: false,
        phone: false,
        carrierpigeon: true,
      },
    };
    const mocks = [
      {
        request: {
          query: GET_USER_QUERY,
          variables: {
            id: props.userId,
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
        <Provider store={mockStore}>
          <AccountPage {...props} />
        </Provider>
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
      values: user.productDetails,
    });
    expect(
      component
        .find('QuerySection')
        .at(2)
        .props(),
    ).toMatchObject({
      values: user.paymentDetails,
    });
  });
});
