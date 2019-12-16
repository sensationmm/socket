import sha1 from 'crypto-js/sha1';

import { SOGProvider } from '../../providers';

export class SOG extends SOGProvider {
  public async checkNickname(nickname: string) {
    const sogSignature = sha1(`${nickname}FkLTX9zv`).toString();

    const response = await this.post('sog_api.php?do=check_nickname', {
      nickname,
      signature: sogSignature,
    });

    return { ...response };
  }

  public async createUser(username: string, nickname: string) {
    const sogSignature = sha1(`${username}${nickname}FkLTX9zv`).toString();

    const response = await this.post('sog_api.php?do=create_user', {
      email: username,
      nickname,
      signature: sogSignature,
    });

    return { ...response };
  }
}
