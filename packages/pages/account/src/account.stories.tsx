import withApollo from '@somo/pda-apps-storybook/src/decorators/apollo';
import withProvider from '@somo/pda-apps-storybook/src/decorators/redux';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import AccountPage from '@somo/pda-pages-account/src';
import { GET_USER_QUERY } from '@somo/pda-pages-account/src/account.component';

const state = {
  user: {
    userId: '15',
    accessToken: 't123',
    tokenType: 'Bearer',
  },
};

const mocks = [
  {
    request: {
      query: GET_USER_QUERY,
      variables: {
        id: state.user.userId,
      },
      context: {
        headers: {
          Authorization: `${state.user.tokenType} ${state.user.accessToken}`,
        },
      },
    },
    result: {
      data: {
        user: {
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
            accountNumber: '*******545',
            sortCode: '554-**-**',
            monthlyPaymentDate: '2019-11-28',
          },
          productDetails: {
            electricity: {
              name: 'Electricity 1-Rate | Fixed - 12 | 3012',
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
              name: 'Gas - 12M | 2012',
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
        },
      },
    },
  },
];

storiesOf('Pages|account', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .addDecorator(withProvider(state))
  .addDecorator(withApollo(mocks))
  .add('default', () => {
    return <AccountPage />;
  });
