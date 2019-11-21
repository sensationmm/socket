import { clear, get, StorageKeys, update } from './';

describe('@somo/pda-utils-storage', () => {
  const token = { token: 't123' };
  beforeEach(() => {
    sessionStorage.clear();
  });

  describe('update', () => {
    it('should set a value in the storage', () => {
      update(StorageKeys.auth, token);
      expect(sessionStorage.__STORE__[StorageKeys.auth]).toEqual(JSON.stringify(token));
    });
  });

  describe('get', () => {
    it('should return a value from the storage', () => {
      update(StorageKeys.auth, token);
      expect(get(StorageKeys.auth)).toEqual(token);
    });
  });

  describe('clear', () => {
    it('should remove a value from the storage', () => {
      update(StorageKeys.auth, token);
      clear(StorageKeys.auth);
      expect(sessionStorage.__STORE__[StorageKeys.auth]).toEqual('');
    });
  });
});
