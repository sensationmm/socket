import { Injectable, ProviderScope } from '@graphql-modules/di';
import Filter from 'bad-words';

import BaseProvider from '../base-provider';

@Injectable({
  scope: ProviderScope.Session,
})
export class AccountProvider extends BaseProvider {
  public async checkRegistration(username: string, nickname: string) {
    try {
      let usernameValid;
      let nicknameValid;

      usernameValid = await this.checkUsername(username);
      if (usernameValid) {
        nicknameValid = await this.checkNickname(nickname);
      }

      return {
        usernameValid,
        nicknameValid,
      };
    } catch (error) {
      throw error;
    }
  }

  public async checkUsername(username: string) {
    try {
      let usernameValid;

      if (username === 'true@test.com') {
        usernameValid = true;
      } else if (username === 'false@test.com') {
        usernameValid = false;
      }

      return usernameValid;
    } catch (error) {
      throw error;
    }
  }

  public async checkNickname(nickname: string) {
    const filter = new Filter();

    filter.addWords('socket');

    return !filter.isProfane(nickname);
  }
}
