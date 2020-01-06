import { Injectable } from '@graphql-modules/di';

import { JuniferProvider } from '../../providers';

@Injectable()
export class UserProvider {
  public juniferProvider = new JuniferProvider();

  public async getUserById(userId) {
    return this.juniferProvider.getUserById(userId);
  }

  public async updatePhone(userId: number, phone: string) {
    return this.juniferProvider.updatePhone(userId, phone);
  }

  public async updateCorrespondenceAddress(userId, address) {
    return this.juniferProvider.updateCorrespondenceAddress(userId, address);
  }

  public async updateContactPreferences(userId, contactId, preferences) {
    return this.juniferProvider.updateContactPreferences(userId, contactId, preferences);
  }
}
