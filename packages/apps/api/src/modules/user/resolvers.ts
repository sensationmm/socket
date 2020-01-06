import { UserProvider } from './provider';

export default {
  Query: {
    user: (_root, _args, { injector, currentUser }) => injector.get(UserProvider).getUserById(currentUser.juniferId),
  },
  Mutation: {
    updateCorrespondenceAddress: (_root, { address }, { injector, currentUser }) =>
      injector.get(UserProvider).updateCorrespondenceAddress(currentUser.juniferId, address),
    updateContactPreferences: (_root, { contactId, preferences }, { injector, currentUser }) =>
      injector.get(UserProvider).updateContactPreferences(currentUser.juniferId, contactId, preferences),
    updatePhone: (_root, { phone }, { injector, currentUser }) =>
      injector.get(UserProvider).updatePhone(currentUser.juniferId, phone),
  },
  User: {
    id: (user) => user.id,
    personalDetails: (user) => user.personalDetails,
    paymentDetails: (user) => user.paymentDetails,
    productDetails: (user) => user.productDetails,
    contactPreferences: (user) => user.contactPreferences,
  },
};
