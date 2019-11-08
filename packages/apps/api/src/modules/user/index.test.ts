import { execute } from 'graphql';
import gql from 'graphql-tag';
import 'reflect-metadata';
import UserModule from '.';

jest.mock('apollo-datasource-rest', () => {
  class MockRESTDataSource {
    public get = jest
      .fn()
      .mockReturnValueOnce({
        id: '23',
        forename: 'John',
        surname: 'Smith',
        primaryContact: {
          email: 'john.smith@somoglobal.com',
          phoneNumber1: '07456548679',
        },
      })
      .mockReturnValueOnce({
        results: [
          {
            number: '54388543',
            billingAddress: {
              address1: '145 Royal College Street',
              postcode: 'NW1 0TH',
            },
          },
        ],
      })
      .mockReturnValueOnce({
        Electricity: {
          supplyAddress: {
            address1: "147 Regent's Park Road",
            postcode: 'NW1 8XL',
          },
        },
      })
      .mockReturnValueOnce({
        results: [
          {
            id: '56',
            paymentMethodType: 'Direct Debit',
          },
        ],
      })
      .mockReturnValueOnce({
        accountName: 'John Smith',
        accountNumber: '1234567789',
        sortCode: '34-45-55',
      })
      .mockReturnValueOnce({
        results: [],
      });
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
            }
          }
        }
      `,
    });

    expect(result.errors).toBeFalsy();
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
        },
      },
    });
  });
});
