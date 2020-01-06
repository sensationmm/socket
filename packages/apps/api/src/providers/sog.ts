import { Injectable } from '@graphql-modules/di';
import { HTTPCache, RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import sha1 from 'crypto-js/sha1';

@Injectable()
export class SOGProvider extends RESTDataSource {
  public static createSignature(sortedAndJoinedParameters: string) {
    return sha1(`${sortedAndJoinedParameters}${process.env.GRAPHQL__SOG_API_PRIVATE_KEY}`).toString();
  }

  public baseURL = process.env.GRAPHQL__SOG_API_BASE_URL;
  public httpCache = new HTTPCache();

  public willSendRequest(request: RequestOptions) {
    request.headers.set('Content-Type', 'multipart/form-data');
    request.headers.set('Authorization', process.env.GRAPHQL__SOG_API_AUTH_TOKEN || '');
    request.headers.set('rejectUnauthorized', 'true');
  }

  public async checkNickname(nickname: string) {
    const sogSignature = SOGProvider.createSignature(nickname);

    const response = await this.post('sog_api.php?do=check_nickname', {
      nickname,
      signature: sogSignature,
    });

    return { ...response };
  }

  public async createUser(username: string, nickname: string) {
    const sogSignature = SOGProvider.createSignature(`${username}${nickname}`);

    const response = await this.post('sog_api.php?do=create_user', {
      email: username,
      nickname,
      signature: sogSignature,
    });

    return { ...response };
  }

  public async login(username, signature) {
    const response = await this.get(`sog_api.php?do=login&email=${username}&signature=${signature}`);

    return { ...response };
  }
}
