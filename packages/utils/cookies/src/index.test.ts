import Cookies from 'js-cookie';

import { clear, clearDomainCookies, CookiesKeys, get, set } from './';

jest.mock('js-cookie');

describe('@somo/pda-utils-cookies', () => {
  describe('set', () => {
    it('should set a cookie', () => {
      set(CookiesKeys.allowCookies, 'some value');
      expect(Cookies.set).toHaveBeenCalledWith(CookiesKeys.allowCookies, 'some value', {});
    });

    it('should set a cookie and set the cookie options if options are passes as a param', () => {
      set(CookiesKeys.allowCookies, 'some value', { expires: 90 });
      expect(Cookies.set).toHaveBeenCalledWith(CookiesKeys.allowCookies, 'some value', { expires: 90 });
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

  describe('clearDomainCookies', () => {
    it('should remove a domain cookies', () => {
      Cookies.get = jest.fn().mockReturnValue({
        cookie1: 'value 1',
        cookie2: 'value 2',
      });
      const domain = 'subdomain.domain.com';
      clearDomainCookies(domain);
      expect(Cookies.get).toHaveBeenCalledWith({ domain });
      expect(Cookies.remove.mock.calls[1]).toEqual(['cookie1', { domain }]);
      expect(Cookies.remove.mock.calls[2]).toEqual(['cookie2', { domain }]);
    });
  });
});
