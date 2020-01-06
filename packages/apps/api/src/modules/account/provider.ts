import { Injectable } from '@graphql-modules/di';

import { AuthProvider, CIAMProvider, JuniferProvider, SOGProvider } from '../../providers';

@Injectable()
export class AccountProvider {
  public ciamProvider = new CIAMProvider();
  public sogProvider = new SOGProvider();
  public juniferProvider = new JuniferProvider();
  public authProvider = new AuthProvider();

  public async checkRegistration(username: string, nickname: string) {
    try {
      let usernameExists;
      let nicknameValid;
      let newCiamUserValid;
      let newSogUserValid;

      usernameExists = await this.ciamProvider.checkUsername(username);
      if (!usernameExists) {
        nicknameValid = await this.sogProvider.checkNickname(nickname);
      }

      if (!usernameExists && nicknameValid.status === 'ok') {
        newCiamUserValid = await this.ciamProvider.createUser(username);
      }

      if (!usernameExists && nicknameValid.status === 'ok' && newCiamUserValid.status === 'Success') {
        newSogUserValid = await this.sogProvider.createUser(username, nickname);
      }

      return {
        usernameExists,
        nicknameValid,
        newSogUserValid,
        newCiamUserValid,
      };
    } catch (error) {
      throw error;
    }
  }

  public async validateIdentity({ identity }) {
    try {
      const { juniferId, sogSignature, username } = await this.authProvider.validateCallbackIdentity(
        identity.id,
        identity.token,
      );

      const { id } = await this.juniferProvider.getUserAccount(juniferId);

      const sog = await this.sogProvider.login(username, sogSignature);

      if (sog.status === 'nok') {
        throw Error('SOG login error');
      }

      const jwtData = {
        accountId: id,
        juniferId,
        username,
      };

      return {
        socketAuthentication: this.authProvider.signJwt(jwtData),
        sogSignature,
        username,
      };
    } catch (error) {
      throw error;
    }
  }
}
