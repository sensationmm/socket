import { CIAMProvider } from '../../providers';

export class CIAM extends CIAMProvider {
  public async checkUsername(username: string) {
    try {
      const { isExisting } = await this.post(`/services/apexrest/v1.3/CIAMEmailService/checkEmail`, {
        email: username,
      });

      return isExisting;
    } catch (error) {
      throw error;
    }
  }
}
