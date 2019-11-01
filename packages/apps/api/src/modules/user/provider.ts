import { Injectable, ProviderScope } from '@graphql-modules/di';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

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
  const { address1, address2, address3, address4, address5, postcode } = address;

  return `${address1}${computeLineAddress(address2)}${computeLineAddress(address3)}${computeLineAddress(
    address4,
  )}${computeLineAddress(address5)}, ${postcode}`;
};

@Injectable({
  scope: ProviderScope.Session,
})
export class UserProvider extends RESTDataSource {
  public baseURL = 'https://api-uk.integration.gentrack.cloud/v1';

  public willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  public async getUserById(userId) {
    try {
      const userData = await this.get(`/junifer/customers/${userId}`);

      const accountsData = await this.get(`/junifer/customers/${userId}/accounts`);
      const account = accountsData.results[0];

      const productsData = await this.get(`/junifer/accounts/${account.id}/productDetails`);
      const product = productsData.Electricity || productsData.Gas;

      return {
        id: userData.id,
        name: `${userData.forename} ${userData.surname}`,
        email: userData.primaryContact.email,
        phone: userData.primaryContact.phoneNumber1,
        accountNumber: account.number,
        correspondenceAddress: computeAddress(account.billingAddress),
        supplyAddress: computeAddress(product.supplyAddress),
      };
    } catch (error) {
      throw error;
    }
  }
}
