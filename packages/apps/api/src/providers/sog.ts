import { Injectable, ProviderScope } from '@graphql-modules/di';
import { HTTPCache, RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

@Injectable({
  scope: ProviderScope.Session,
})
export class SOGProvider extends RESTDataSource {
  public baseURL = 'https://socket.test.standingongiants.com/';
  public httpCache = new HTTPCache();

  public willSendRequest(request: RequestOptions) {
    request.headers.set('Content-Type', 'multipart/form-data');
    request.headers.set('Authorization', 'Basic c29nLXNvY2tldDpmQkFuTHVIODl2M1ZVa1d5');
    request.headers.set('rejectUnauthorized', 'true');
  }
}
