import { Injectable } from '@graphql-modules/di';
import { findPaymentDate } from '@somo/pda-utils-dates/src';
import { camelize, computeAddress } from '@somo/pda-utils-strings/src';
import { HTTPCache, RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import axios from 'axios';
import jwt from 'jsonwebtoken';

interface ITilInformation {
  itemName: string;
  itemValue: string;
  exclVAT: string;
  inclVAT: string;
}

interface ITariffInformation {
  productCode: string;
  paymentMethod: string;
  accountManagementType: string;
}

interface IProductDetails {
  name: string;
  endDate: string;
  TIL: {};
}

@Injectable()
export class JuniferProvider extends RESTDataSource {
  public baseURL = process.env.GRAPHQL__JUNIFER_API_BASE_URL;
  public httpCache = new HTTPCache();

  public juniferToken;

  public async willSendRequest(request: RequestOptions) {
    const token = await this.getToken();
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('Authorization', `Bearer ${token}`);
  }

  public async getUserById(userId) {
    try {
      const { id, accountId, billDelivery, products, ...rest } = await this.getPersonalDetails(userId);
      const paymentDetails = await this.getPaymentDetails(accountId);
      const productDetails = await this.getProductDetails(accountId, billDelivery, products);
      const contactPreferences = await this.getContactPreferences(accountId);

      return {
        id,
        personalDetails: rest,
        paymentDetails,
        productDetails,
        contactPreferences,
      };
    } catch (error) {
      throw error;
    }
  }

  public async getUserAccount(userId) {
    try {
      const { results } = await this.get(`/junifer/customers/${userId}/accounts`);
      const [account] = results;

      return account;
    } catch (error) {
      throw error;
    }
  }

  public async updatePhone(userId: number, phone: string) {
    try {
      const account = await this.getUserAccount(userId);

      await this.put(`/junifer/accounts/${account.id}/primaryContact`, { phoneNumber1: phone });

      return {
        id: userId,
        personalDetails: {
          phone,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  public async updateCorrespondenceAddress(userId, address) {
    try {
      // DataSource issue - the request body needs to be destructured
      await this.put(`/junifer/customers/${userId}/updateBillingAddress`, { ...address });

      return {
        id: userId,
        personalDetails: {
          correspondenceAddress: computeAddress(address),
          detailedCorrespondenceAddress: {
            ...address,
          },
        },
      };
    } catch (error) {
      throw error;
    }
  }

  public async updateContactPreferences(userId, contactId, preferences) {
    try {
      const params = {
        marketingPreferences: {
          marketByEmail: preferences.email === true,
          marketBySms: preferences.sms === true,
          marketByNumber1: preferences.phone === true,
          marketByPost: preferences.post === true,
          marketBySocialMedia3: preferences.carrierpigeon === true,
        },
        methodOfConsent: 'Portal',
      };

      await this.put(`/junifer/contacts/${contactId}/marketingPreferences`, params);

      const returnVal = {
        id: userId,
        contactPreferences: {
          contactId,
          ...preferences,
        },
      };

      return returnVal;
    } catch (error) {
      throw error;
    }
  }

  private isTokenExpired(token) {
    const data = jwt.decode(token);
    if (Date.now() >= data.exp * 1000) {
      return false;
    }
  }

  private async getToken() {
    if (this.juniferToken && !this.isTokenExpired(this.juniferToken)) {
      return this.juniferToken;
    }

    const { data } = await axios.post(
      `${process.env.GRAPHQL__JUNIFER_API_BASE_URL}/token`,
      {},
      {
        auth: {
          username: process.env.GRAPHQL__JUNIFER_API_TOKEN_USERNAME || '',
          password: process.env.GRAPHQL__JUNIFER_API_TOKEN_PASSWORD || '',
        },
      },
    );

    this.juniferToken = data.accessToken;

    return this.juniferToken;
  }

  private async getPersonalDetails(userId) {
    try {
      const {
        id,
        forename,
        surname,
        primaryContact: { email, phoneNumber1 },
      } = await this.get(`/junifer/customers/${userId}`);

      const account = await this.getUserAccount(userId);

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
        detailedCorrespondenceAddress: {
          ...account.billingAddress,
        },
        supplyAddress: computeAddress(product.supplyAddress),
        billDelivery: account.billDelivery,
        products: {
          Electricity,
          Gas,
        },
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

  private async getContactPreferences(accountId) {
    try {
      const { results } = await this.get(`/junifer/accounts/${accountId}/contacts`);
      const { id } = results[0];

      const prefs = await this.get(`/junifer/contacts/${id}/marketingPreferences`);

      const contactId = id;
      const email = prefs.marketByEmail ? prefs.marketByEmail.consentGiven : false;
      const sms = prefs.marketBySms ? prefs.marketBySms.consentGiven : false;
      const phone = prefs.marketByNumber1 ? prefs.marketByNumber1.consentGiven : false;
      const post = prefs.marketByPost ? prefs.marketByPost.consentGiven : false;
      const carrierpigeon = prefs.marketBySocialMedia3 ? prefs.marketBySocialMedia3.consentGiven : false;

      return {
        contactId,
        email,
        phone,
        sms,
        post,
        carrierpigeon,
      };
    } catch (error) {
      throw error;
    }
  }

  private async getProductDetails(userId: string, billDelivery: string, products) {
    try {
      let electricity;
      let gas;
      const accountManagementType = billDelivery === 'Email' ? 'Online' : 'Offline';
      const electricTIL = {};
      const gasTIL = {};

      const { Electricity, Gas } = products;
      const tariffInformation = await this.get(`/junifer/accounts/${userId}/tariffInformation`);

      const tilItemNames = [
        'Tariff',
        'Contract Type',
        'Payment Method',
        'Unit Rate',
        'Standing Charge (DD)',
        'Billing Frequency',
      ];

      if (Electricity) {
        electricity = {} as IProductDetails;

        const { code, directDebit, name, toDt } = Electricity;
        const paymentMethod = directDebit ? 'DD' : 'NonDD';
        const [{ TIL }] = tariffInformation.Electricity.filter(
          (product: ITariffInformation) =>
            product.productCode === code &&
            product.paymentMethod === paymentMethod &&
            product.accountManagementType === accountManagementType,
        );

        TIL.forEach((info: ITilInformation) => {
          if (tilItemNames.includes(info.itemName)) {
            electricTIL[camelize(info.itemName)] = {
              itemValue: info.itemValue,
              inclVAT: info.inclVAT,
            };
          }
        });
        electricity.name = name;
        electricity.endDate = toDt;
        electricity.TIL = electricTIL;
      }

      if (Gas) {
        gas = {} as IProductDetails;
        const { code, directDebit, name, toDt } = Gas;
        const paymentMethod = directDebit ? 'DD' : 'NonDD';
        const [{ TIL }] = tariffInformation.Gas.filter(
          (product: ITariffInformation) =>
            product.productCode === code &&
            product.paymentMethod === paymentMethod &&
            product.accountManagementType === accountManagementType,
        );

        TIL.forEach((info: ITilInformation) => {
          if (tilItemNames.includes(info.itemName)) {
            gasTIL[camelize(info.itemName)] = {
              itemValue: info.itemValue,
              inclVAT: info.inclVAT,
            };
          }
        });
        gas.name = name;
        gas.endDate = toDt;
        gas.TIL = gasTIL;
      }

      return {
        electricity,
        gas,
      };
    } catch (error) {
      throw error;
    }
  }
}
