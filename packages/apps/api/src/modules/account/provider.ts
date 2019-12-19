import { Injectable, ProviderScope } from '@graphql-modules/di';
import axios from 'axios';
import sha1 from 'crypto-js/sha1';

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

  public async validateIdentity(identity) {
    try {
      const { data } = await axios.post(identity.id, null, {
        headers: {
          Authorization: `Bearer ${identity.token}`,
        },
      });

      const sogSignature = sha1(`${data.custom_attributes.Username}FkLTX9zv`).toString();

      return {
        token: identity.token,
        juniferCustomerIds: data.custom_attributes.CustomerID,
        username: data.custom_attributes.Username,
        hash: sogSignature,
      };
    } catch (error) {
      throw error;
    }
  }
}
