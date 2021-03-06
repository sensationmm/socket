import { AccountProvider } from './provider';

export default {
  Query: {
    checkRegistration: (_root, { username, nickname }, { injector }) =>
      injector.get(AccountProvider).checkRegistration(username, nickname),
    validateIdentity: (_root, identity, { injector }) => injector.get(AccountProvider).validateIdentity(identity),
  },
  AccountStatus: {
    usernameExists: (account) => account.usernameValid,
    nicknameValid: (account) => account.nicknameValid,
    newSogUserValid: (account) => account.newSogUserValid,
    newCiamUserValid: (account) => account.newCiamUserValid,
  },
  IdentityValidationResult: {
    socketAuthentication: (identity) => identity.socketAuthentication,
    sogSignature: (identity) => identity.sogSignature,
    username: (identity) => identity.username,
  },
};
