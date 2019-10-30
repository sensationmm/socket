import { Injectable, ProviderScope } from '@graphql-modules/di';
import { RESTDataSource } from 'apollo-datasource-rest';

@Injectable({
  scope: ProviderScope.Session,
})
export class UserProvider extends RESTDataSource {
  public baseURL = 'https://movies-api.example.com/';

  public async getUserById(id) {
    return this.get(`/junifer/customers/${id}`);
  }
}

// export class UserProvider {
//   users = [
//     {
//       _id: '0',
//       name: 'Tom',
//       email: 'tm@sg.com',
//       phone: '1234567890',
//     },
//     {
//       _id: '1',
//       name: 'George',
//     },
//     {
//       _id: '2',
//       name: 'Kevin',
//     },
//     {
//       _id: '3',
//       name: 'Ralph',
//     },
//     {
//       _id: '4',
//       name: 'Ionut',
//     },
//   ];
//   getUserById(id) {
//     return this.users.find((user) => user._id === id);
//   }
// }
