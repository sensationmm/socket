import { UserProvider } from './provider';

export default {
  Query: {
    user: (_root, { id }, { injector }) => injector.get(UserProvider).getUserById(id),
  },
  User: {
    id: (user) => user.id,
    name: (user) => user.name,
    email: (user) => user.email,
    phone: (user) => user.phone,
    accountNumber: (user) => user.accountNumber,
    correspondenceAddress: (user) => user.correspondenceAddress,
    supplyAddress: (user) => user.supplyAddress,
  },
};
