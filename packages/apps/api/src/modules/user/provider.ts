import { Injectable, ProviderScope } from '@graphql-modules/di';
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
}
