import { Injectable, ProviderScope } from '@graphql-modules/di';
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

@Injectable({
  scope: ProviderScope.Session,
})
class BaseProvider extends RESTDataSource {
  public baseURL = 'https://api-uk.integration.gentrack.cloud/v1';

  public willSendRequest(request: RequestOptions) {
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('Authorization', this.context.token);
  }
}

export default BaseProvider;
