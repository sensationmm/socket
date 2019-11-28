import { UserProvider } from './provider';

export default {
  Query: {
    user: (_root, { id }, { injector }) => injector.get(UserProvider).getUserById(id),
  },
  Mutation: {
    updateCorrespondenceAddress: (_root, { id, address }, { injector }) =>
      injector.get(UserProvider).updateCorrespondenceAddress(id, address),
    updateContactPreferences: (_root, { userId, contactId, preferences }, { injector }) =>
      injector.get(UserProvider).updateContactPreferences(userId, contactId, preferences),
  },
  User: {
    id: (user) => user.id,
    personalDetails: (user) => user.personalDetails,
    paymentDetails: (user) => user.paymentDetails,
    productDetails: (user) => user.productDetails,
    contactPreferences: (user) => user.contactPreferences,
  },
};
