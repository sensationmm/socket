import { UserProvider } from './provider';

export default {
  Query: {
    user: (_root, { id }, { injector }) => injector.get(UserProvider).getUserById(id),
  },
  User: {
    id: (user) => user.id,
    personalDetails: (user) => user.personalDetails,
    paymentDetails: (user) => user.paymentDetails,
    productDetails: (user) => user.productDetails,
  },
};
