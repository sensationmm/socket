import { Injectable } from '@graphql-modules/di';

@Injectable()
export class UserProvider {
  users = [
    {
      _id: '0',
      name: 'Tom',
    },
    {
      _id: '1',
      name: 'George',
    },
    {
      _id: '2',
      name: 'Kevin',
    },
    {
      _id: '3',
      name: 'Ralph',
    },
    {
      _id: '4',
      name: 'Ionut',
    },
  ];
  getUserById(id) {
    return this.users.find((user) => user._id === id);
  }
}
