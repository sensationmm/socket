import { Injectable, ProviderScope } from '@graphql-modules/di';
import { findPaymentDate } from '@somo/pda-utils-dates/src';
import BaseProvider from '../base-provider';

interface IAddress {
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
  postcode: string;
}

const computeLineAddress = (addressLine: string) => (addressLine ? `, ${addressLine}` : '');

const computeAddress = (address: IAddress) => {
  const fields = ['address1', 'address2', 'address3', 'address4', 'address5', 'postcode'];

  return fields.reduce((acc, curr, currentIndex) => {
    if (currentIndex === 0) {
      return `${acc}${address[curr]}`;
    }

    if (currentIndex === fields.length - 1) {
      return `${acc}, ${address[curr]}`;
    }

    return `${acc}${computeLineAddress(address[curr])}`;
  }, '');
};

@Injectable({
  scope: ProviderScope.Session,
})
export class UserProvider extends BaseProvider {
  public async getUserById(userId) {
    try {
      const { id, accountId, ...rest } = await this.getPersonalDetails(userId);
      const paymentDetails = await this.getPaymentDetails(accountId);

      return {
        id,
        personalDetails: rest,
        paymentDetails,
      };
    } catch (error) {
      throw error;
    }
  }

  private async getPersonalDetails(userId) {
    try {
      const {
        id,
        forename,
        surname,
        primaryContact: { email, phoneNumber1 },
      } = await this.get(`/junifer/customers/${userId}`);

      const { results } = await this.get(`/junifer/customers/${userId}/accounts`);
      const account = results[0];

      const { Electricity, Gas } = await this.get(`/junifer/accounts/${account.id}/productDetails`);
      const product = Electricity || Gas;

      return {
        id,
        accountId: account.id,
        name: `${forename} ${surname}`,
        email,
        phone: phoneNumber1,
        accountNumber: account.number,
        correspondenceAddress: computeAddress(account.billingAddress),
        supplyAddress: computeAddress(product.supplyAddress),
      };
    } catch (error) {
      throw error;
    }
  }

  private async getPaymentDetails(accountId) {
    try {
      const paymentMethods = await this.get(`/junifer/accounts/${accountId}/paymentMethods`);
      const { id } =
        paymentMethods.results.filter(
          ({ paymentMethodType, status }) => paymentMethodType === 'Direct Debit' && status === 'Active',
        )[0] || {};

      if (!id) {
        return null;
      }

      const { accountName, accountNumber, sortCode } = await this.get(`/junifer/directDebits/${id}`);

      const { results } = await this.get(`/junifer/accounts/${accountId}/paymentSchedulePeriods`);

      return {
        accountName,
        accountNumber,
        sortCode,
        monthlyPaymentDate: findPaymentDate(results) || null,
      };
    } catch (error) {
      throw error;
    }
  }
}
