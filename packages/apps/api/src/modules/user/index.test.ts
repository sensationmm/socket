import { execute } from 'graphql';
import gql from 'graphql-tag';
import 'reflect-metadata';

import { findPaymentDate } from '@somo/pda-utils-dates/src';
import UserModule from '.';

jest.mock('@somo/pda-utils-dates/src', () => ({
  findPaymentDate: jest.fn().mockReturnValue('2019-10-21'),
}));

const personalDetails = {
  id: '23',
  forename: 'John',
  surname: 'Smith',
  primaryContact: {
    email: 'john.smith@somoglobal.com',
    phoneNumber1: '07456548679',
  },
};

const accountDetails = {
  results: [
    {
      number: '54388543',
      billingAddress: {
        address1: '145 Royal College Street',
        postcode: 'NW1 0TH',
      },
    },
  ],
};

const paymentTypes = {
  results: [
    {
      id: '56',
      paymentMethodType: 'Direct Debit',
    },
  ],
};

const products = {
  Electricity: {
    supplyAddress: {
      address1: "147 Regent's Park Road",
      postcode: 'NW1 8XL',
    },
  },
};

const paymentAccountDetails = {
  accountName: 'John Smith',
  accountNumber: '1234567789',
  sortCode: '34-45-55',
};

const paymentsList = {
  results: [
    {
      fromDt: '2019-09-12',
      frequencyAlignmentDt: '2019-10-26',
    },
    {
      fromDt: '2020-10-17',
      frequencyAlignmentDt: '2019-10-25',
    },
    {
      fromDt: '2019-10-19',
      frequencyAlignmentDt: '2019-10-21',
    },
    {
      fromDt: '2019-10-17',
      toDt: '2020-11-29',
      frequencyAlignmentDt: '2019-10-19',
    },
  ],
};

jest.mock('apollo-datasource-rest', () => {
  class MockRESTDataSource {
    public get = jest
      .fn()
      .mockReturnValueOnce(personalDetails)
      .mockReturnValueOnce(accountDetails)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(paymentTypes)
      .mockReturnValueOnce(paymentAccountDetails)
      .mockReturnValueOnce(paymentsList);
  }

  return {
    RESTDataSource: MockRESTDataSource,
  };
});

describe('UserModule', () => {
  it('FieldResolver of Query: userById', async () => {
    const { schema } = UserModule;

    const result = await execute({
      schema,
      contextValue: {
        req: {
          headers: {
            authorization: 'Bearer t123',
          },
        },
      },
      document: gql`
        query {
          user(id: "15") {
            id
            personalDetails {
              name
              email
              phone
              accountNumber
              correspondenceAddress
              supplyAddress
            }
            paymentDetails {
              accountName
              accountNumber
              sortCode
              monthlyPaymentDate
            }
          }
        }
      `,
    });

    expect(result.errors).toBeFalsy();
    expect(findPaymentDate).toHaveBeenCalledWith(paymentsList.results);
    expect(result.data).toEqual({
      user: {
        id: '23',
        personalDetails: {
          name: 'John Smith',
          email: 'john.smith@somoglobal.com',
          phone: '07456548679',
          accountNumber: '54388543',
          correspondenceAddress: '145 Royal College Street, NW1 0TH',
          supplyAddress: "147 Regent's Park Road, NW1 8XL",
        },
        paymentDetails: {
          accountName: 'John Smith',
          accountNumber: '1234567789',
          sortCode: '34-45-55',
          monthlyPaymentDate: '2019-10-21',
        },
      },
    });
  });
});
