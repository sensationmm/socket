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

  public async createUser(username: string) {
    const userDetails = [
      {
        contact: {
          attributes: {
            type: 'Contact',
          },
          FirstName: 'Socket',
          LastName: 'Energy',
          Email: username,
        },
        Application: {
          attributes: {
            type: 'Application__c',
          },
          Application_External_Id__c: '1009',
        },
      },
    ];

    try {
      const [{ Status, ErrorMessage }] = await this.post(
        `/services/apexrest/v1.3/CIAMContact/createNewCIAMContact`,
        userDetails,
      );

      return { status: Status, message: ErrorMessage };
    } catch (error) {
      throw error;
    }
  }
}
