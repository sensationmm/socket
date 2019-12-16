import { Injectable, ProviderScope } from '@graphql-modules/di';
import { HTTPCache, RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

@Injectable({
  scope: ProviderScope.Session,
})
export class JuniferProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api-uk.integration.gentrack.cloud/v1';
    this.httpCache = new HTTPCache();
  }

  public willSendRequest(request: RequestOptions) {
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('Authorization', this.context.token);
  }
}
