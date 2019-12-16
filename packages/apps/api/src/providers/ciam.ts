import { Injectable, ProviderScope } from '@graphql-modules/di';
import { HTTPCache, RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import axios from 'axios';

const auth = axios.create();

@Injectable({
  scope: ProviderScope.Session,
})
export class CIAMProvider extends RESTDataSource {
  public token;

  constructor() {
    super();
    this.baseURL = 'https://eciam--SITCIAM.cs106.my.salesforce.com';
    this.httpCache = new HTTPCache();
  }

  public async willSendRequest(request: RequestOptions) {
    if (this.token === undefined) {
      await auth
        .request({
          url: `https://test.salesforce.com/services/oauth2/token`,
          method: 'POST',
          params: {
            grant_type: 'password',
            client_id: '3MVG9qQjGkWUbcrGuliW88sLR8gbSHLUZ38k5BcfKDJBZ5g.ZeYngM6bHwQEFd98rSPzjIjTNA.k47GrpMg1Z',
            client_secret: 'B6B440CCF0E23FA3DF9EC76D2083FBAF6B4E8BAAF8EDB3F07C23B47A4B6831FB',
            username: 'vikas.d.mehta@accenture.com.sitciam',
            password: 'Lifeissimple@09',
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
}
