import { AccountProvider } from './provider';

export default {
  Query: {
    checkRegistration: (_root, { username, nickname }, { injector }) =>
      injector.get(AccountProvider).checkRegistration(username, nickname),
  },
  AccountStatus: {
    usernameValid: (account) => account.usernameValid,
    nicknameValid: (account) => account.nicknameValid,
  },
};
