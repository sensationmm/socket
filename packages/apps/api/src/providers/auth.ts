import { Injectable } from '@graphql-modules/di';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import { SOGProvider } from '../providers';
@Injectable()
export class AuthProvider {
  public secret = process.env.GRAPHQL__JWT_PRIVATE_KEY;

  public async validateCallbackIdentity(salesForceWebId: string, token: string) {
    try {
      const { data } = await axios.post(salesForceWebId, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const sogSignature = SOGProvider.createSignature(data.custom_attributes.Username);

      return {
        juniferId: data.custom_attributes.CustomerID,
        username: data.custom_attributes.Username,
        sogSignature,
      };
    } catch (error) {
      throw error;
    }
  }

  public validateJwt(token: string) {
    try {
      const identity = jwt.verify(token, this.secret);

      return identity;
    } catch (error) {
      throw error;
    }
  }

  public signJwt(data) {
    const token = jwt.sign(data, this.secret, {
      algorithm: 'HS512',
      expiresIn: 1000 * 60 * 30, // 30 minutes
    });

    return token;
  }
}
