import Cookies from 'js-cookie';

import { clear, CookiesKeys, get, set } from './';

jest.mock('js-cookie');

describe('@somo/pda-utils-cookies', () => {
  describe('set', () => {
    it('should set a cookie', () => {
      set(CookiesKeys.allowCookies, 'some value');
      expect(Cookies.set).toHaveBeenCalledWith(CookiesKeys.allowCookies, 'some value');
    });
  });

  describe('get', () => {
    it('should return a cookie value', () => {
      get(CookiesKeys.allowCookies);
      expect(Cookies.get).toHaveBeenCalledWith(CookiesKeys.allowCookies);
    });
  });

  describe('clear', () => {
    it('should remove a cookie', () => {
      clear(CookiesKeys.allowCookies);
      expect(Cookies.remove).toHaveBeenCalledWith(CookiesKeys.allowCookies);
    });
  });
});
