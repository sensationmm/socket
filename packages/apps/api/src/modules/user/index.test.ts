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
      billDelivery: 'Email',
    },
  ],
};

const paymentTypes = {
  results: [
    {
      id: '56',
      paymentMethodType: 'Direct Debit',
      status: 'Active',
    },
  ],
};

const products = {
  Gas: {
    code: 'G1R-F12-2012',
    name: 'Gas - 12M | 2012',
    directDebit: true,
    prepay: false,
    availableToPublic: true,
    standingCharge: 7.5,
    earlyTerminationCharge: 0,
    dualFuelDiscount: 0,
    onlineDiscount: 0,
    followOnCode: 'G1R-VAR',
    gspGroup: '_B',
    unitRate: 11.55,
    fromDt: '2019-10-14',
    toDt: '2020-10-14',
    supplyAddress: {
      address1: "147 Regent's Park Road",
      address4: '',
      address5: '',
      postcode: 'NW1 8XL',
      addressType: 'Standard address',
      validPostcode: false,
    },
  },
  Electricity: {
    code: 'E1R-F12-3012',
    name: 'Electricity 1-Rate | Fixed - 12 | 3012',
    directDebit: true,
    prepay: false,
    availableToPublic: true,
    standingCharge: 7.5,
    earlyTerminationCharge: 0,
    dualFuelDiscount: 0,
    onlineDiscount: 0,
    followOnCode: 'E1R-VAR',
    gspGroup: '_B',
    unitRates: {
      Standard: 11.55,
    },
    fromDt: '2019-10-14',
    toDt: '2020-10-14',
    supplyAddress: {
      address1: "147 Regent's Park Road",
      address4: '',
      address5: '',
      postcode: 'NW1 8XL',
      addressType: 'Standard address',
      validPostcode: false,
    },
  },
};

const paymentAccountDetails = {
  accountName: 'John Smith',
  accountNumber: '1234567789',
  sortCode: '34-45-55',
};

const tariffInformation = {
  Electricity: [
    {
      productCode: 'E1R-F12-3012',
      rateCount: 1,
      productType: 'E1R',
      productGroup: 'F12',
      agreementType: '1 year',
      agreementMonths: 12,
      paymentMethod: 'DD',
      accountManagementType: 'Online',
      gspGroupCode: '_A',
      endDttm: '2019-11-14',
      TIL: [
        {
          itemName: 'Tariff',
          itemValue: 'Electricity 1-Rate | Fixed - 12 | 3012',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Contract Type',
          itemValue: 'Fixed Rate',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Payment Method',
          itemValue: 'Variable Direct Debit',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Unit Rate',
          itemValue: '',
          exclVAT: '11.00p/kWh',
          inclVAT: '11.55p/kWh',
        },
        {
          itemName: 'Standing Charge (DD)',
          itemValue: '',
          exclVAT: '7.14p/day (£26.06/year)',
          inclVAT: '7.50p/day (£27.36/year)',
        },
        {
          itemName: 'Online Discount',
          itemValue: '',
          exclVAT: '£0.00/year per fuel',
          inclVAT: '£0.00/year per fuel',
        },
        {
          itemName: 'Dual Fuel Discount',
          itemValue: '',
          exclVAT: '£0.00/year per fuel',
          inclVAT: '£0.00/year per fuel',
        },
        {
          itemName: 'Early Termination Fee',
          itemValue: '',
          exclVAT: '£0.00 per fuel (inc VAT)',
          inclVAT: '£0.00 per fuel (inc VAT)',
        },
        {
          itemName: 'Estimated Annual Usage',
          itemValue: '',
          exclVAT: '3,497kWh',
          inclVAT: '3,497kWh',
        },
        {
          itemName: 'Customer Estimated Annual Cost (Monthly)',
          itemValue: '',
          exclVAT: '£35.94/month',
          inclVAT: '£35.94/month',
        },
        {
          itemName: 'Customer Estimated Annual Cost',
          itemValue: '',
          exclVAT: '£431.26/year',
          inclVAT: '£431.26/year',
        },
        {
          itemName: 'Estimated Annual Usage',
          itemValue: '',
          exclVAT: '3,100kWh',
          inclVAT: '3,100kWh',
        },
        {
          itemName: 'Industry Estimated Annual Cost (Monthly)',
          itemValue: '',
          exclVAT: '£32.08/month',
          inclVAT: '£32.08/month',
        },
        {
          itemName: 'Industry Estimated Annual Cost',
          itemValue: '',
          exclVAT: '£385.00/year',
          inclVAT: '£385.00/year',
        },
        {
          itemName: 'Tariff Comparison Rate (TCR)*',
          itemValue: '',
          exclVAT: '12.43p/kWh',
          inclVAT: '12.43p/kWh',
        },
        {
          itemName: 'Tariff Supplier',
          itemValue: '',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Billing Frequency',
          itemValue: 'Monthly',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Bill Delivery Method',
          itemValue: 'Mail',
          exclVAT: '',
          inclVAT: '',
        },
      ],
    },
  ],
  Gas: [
    {
      productCode: 'G1R-F12-2012',
      rateCount: 1,
      productType: 'G1R',
      productGroup: 'F12',
      agreementType: '1 year',
      agreementMonths: 12,
      paymentMethod: 'DD',
      accountManagementType: 'Online',
      gspGroupCode: '_A',
      endDttm: '2019-11-14',
      TIL: [
        {
          itemName: 'Tariff',
          itemValue: 'Gas - 12M | 2012',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Contract Type',
          itemValue: 'Fixed Rate',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Payment Method',
          itemValue: 'Variable Direct Debit',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Unit Rate',
          itemValue: '',
          exclVAT: '11.00p/kWh',
          inclVAT: '11.55p/kWh',
        },
        {
          itemName: 'Standing Charge (DD)',
          itemValue: '',
          exclVAT: '7.14p/day (£26.06/year)',
          inclVAT: '7.50p/day (£27.36/year)',
        },
        {
          itemName: 'Online Discount',
          itemValue: '',
          exclVAT: '£0.00/year per fuel',
          inclVAT: '£0.00/year per fuel',
        },
        {
          itemName: 'Dual Fuel Discount',
          itemValue: '',
          exclVAT: '£0.00/year per fuel',
          inclVAT: '£0.00/year per fuel',
        },
        {
          itemName: 'Early Termination Fee',
          itemValue: '',
          exclVAT: '£0.00 per fuel (inc VAT)',
          inclVAT: '£0.00 per fuel (inc VAT)',
        },
        {
          itemName: 'Estimated Annual Usage',
          itemValue: '',
          exclVAT: '3,497kWh',
          inclVAT: '3,497kWh',
        },
        {
          itemName: 'Customer Estimated Annual Cost (Monthly)',
          itemValue: '',
          exclVAT: '£35.94/month',
          inclVAT: '£35.94/month',
        },
        {
          itemName: 'Customer Estimated Annual Cost',
          itemValue: '',
          exclVAT: '£431.26/year',
          inclVAT: '£431.26/year',
        },
        {
          itemName: 'Estimated Annual Usage',
          itemValue: '',
          exclVAT: '3,100kWh',
          inclVAT: '3,100kWh',
        },
        {
          itemName: 'Industry Estimated Annual Cost (Monthly)',
          itemValue: '',
          exclVAT: '£32.08/month',
          inclVAT: '£32.08/month',
        },
        {
          itemName: 'Industry Estimated Annual Cost',
          itemValue: '',
          exclVAT: '£385.00/year',
          inclVAT: '£385.00/year',
        },
        {
          itemName: 'Tariff Comparison Rate (TCR)*',
          itemValue: '',
          exclVAT: '12.43p/kWh',
          inclVAT: '12.43p/kWh',
        },
        {
          itemName: 'Tariff Supplier',
          itemValue: '',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Billing Frequency',
          itemValue: 'Monthly',
          exclVAT: '',
          inclVAT: '',
        },
        {
          itemName: 'Bill Delivery Method',
          itemValue: 'Mail',
          exclVAT: '',
          inclVAT: '',
        },
      ],
    },
  ],
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
      .mockReturnValueOnce(paymentsList)
      .mockReturnValueOnce(tariffInformation);

    public put = jest.fn().mockReturnValueOnce({});
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
              detailedCorrespondenceAddress {
                address1
                postcode
              }
              supplyAddress
            }
            paymentDetails {
              accountName
              accountNumber
              sortCode
              monthlyPaymentDate
            }
            productDetails {
              electricity {
                __typename
                ...productInfo
              }
              gas {
                __typename
                ...productInfo
              }
            }
          }
        }

        fragment productInfo on ProductInformation {
          __typename
          name
          endDate
          TIL {
            tariff {
              itemValue
              inclVAT
            }
            contractType {
              itemValue
              inclVAT
            }
            paymentMethod {
              itemValue
              inclVAT
            }
            unitRate {
              itemValue
              inclVAT
            }
            standingChargeDd {
              itemValue
              inclVAT
            }
            billingFrequency {
              itemValue
              inclVAT
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
          detailedCorrespondenceAddress: {
            address1: '145 Royal College Street',
            postcode: 'NW1 0TH',
          },
          supplyAddress: "147 Regent's Park Road, NW1 8XL",
        },
        paymentDetails: {
          accountName: 'John Smith',
          accountNumber: '1234567789',
          sortCode: '34-45-55',
          monthlyPaymentDate: '2019-10-21',
        },
        productDetails: {
          electricity: {
            __typename: 'ProductInformation',
            name: 'Electricity 1-Rate | Fixed - 12 | 3012',
            endDate: '2020-10-14',
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
            endDate: '2020-10-14',
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
    });
  });

  it('FieldResolver of Mutation: updateCorrespondenceAddress', async () => {
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
        mutation {
          updateCorrespondenceAddress(
            id: "15"
            address: { address1: "135 Regents Park Road", address2: "flat 1", postcode: "NW1 8XL" }
          ) {
            id
            personalDetails {
              correspondenceAddress
              detailedCorrespondenceAddress {
                address1
                address2
                postcode
              }
            }
          }
        }
      `,
    });

    expect(result.errors).toBeFalsy();
    expect(result.data).toEqual({
      updateCorrespondenceAddress: {
        id: '15',
        personalDetails: {
          correspondenceAddress: '135 Regents Park Road, flat 1, NW1 8XL',
          detailedCorrespondenceAddress: {
            address1: '135 Regents Park Road',
            address2: 'flat 1',
            postcode: 'NW1 8XL',
          },
        },
      },
    });
  });
});
