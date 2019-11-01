import { Injectable, ProviderScope } from '@graphql-modules/di';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

@Injectable({
  scope: ProviderScope.Session,
})
export class UserProvider extends RESTDataSource {
  public baseURL = 'https://api-uk.integration.gentrack.cloud/v1';

  public willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  public async getUserById(id) {
    try {
      const userData = await this.get(`/junifer/customers/${id}`);
      const accountData = await this.get(`/junifer/accounts/${id}/productDetails`);

      return {
        ...userData,
        ...accountData,
      };
    } catch (error) {
      throw error;
    }
  }
}
