import { Injectable, ProviderScope } from '@graphql-modules/di';

import { CIAM } from './ciam';
import { SOG } from './sog';

@Injectable({
  scope: ProviderScope.Session,
})
export class AccountProvider {
  public async checkRegistration(username: string, nickname: string) {
    try {
      let usernameExists;
      let nicknameValid;
      let newSogUserValid;
      const ciam = new CIAM();
      const sog = new SOG();

      usernameExists = await ciam.checkUsername(username);
      if (!usernameExists) {
        nicknameValid = await sog.checkNickname(nickname);
      }

      if (!usernameExists && nicknameValid.status === 'ok') {
        newSogUserValid = await sog.createUser(username, nickname);
      }

      return {
        usernameExists,
        nicknameValid,
        newSogUserValid,
      };
    } catch (error) {
      throw error;
    }
  }
}
