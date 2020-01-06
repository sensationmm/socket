import { Injectable } from '@graphql-modules/di';
import { HTTPCache, RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import axios from 'axios';

const auth = axios.create();

@Injectable()
export class CIAMProvider extends RESTDataSource {
  public token;

  public baseURL = process.env.GRAPHQL__CIAM_API_BASE_URL;
  public httpCache = new HTTPCache();

  public async willSendRequest(request: RequestOptions) {
    if (this.token === undefined) {
      await auth
        .request({
          url: process.env.GRAPHQL__CIAM_TOKEN_API_BASE_URL,
          method: 'POST',
          params: {
            grant_type: 'password',
            client_id: process.env.CIAM_CLIENT_ID,
            client_secret: process.env.GRAPHQL__CIAM_TOKEN_API_CLIENT_SECRET,
            username: process.env.GRAPHQL__CIAM_TOKEN_API_USERNAME,
            password: process.env.GRAPHQL__CIAM_TOKEN_API_PASSWORD,
          },
        })
        .then(({ data }) => {
          this.token = data.access_token;
        })
        .catch((error) => {
          throw error;
        });
    }

    request.headers.set('Authorization', `Bearer ${this.token}`);
    request.headers.set('Content-Type', 'application/json');
  }

  public async checkUsername(username: string) {
    try {
      const { isExisting } = await this.post(`/services/apexrest/v1.3/CIAMEmailService/checkEmail`, {
        email: username,
      });

      return isExisting;
    } catch (error) {
      throw error;
    }
  }

  public async createUser(username: string) {
    const userDetails = [
      {
        contact: {
          attributes: {
            type: 'Contact',
          },
          FirstName: 'Socket',
          LastName: 'Energy',
          Email: username,
        },
        Application: {
          attributes: {
            type: 'Application__c',
          },
          Application_External_Id__c: '1009',
        },
      },
    ];

    try {
      const [{ Status, ErrorMessage }] = await this.post(
        `/services/apexrest/v1.3/CIAMContact/createNewCIAMContact`,
        userDetails,
      );

      return { status: Status, message: ErrorMessage };
    } catch (error) {
      throw error;
    }
  }
}
