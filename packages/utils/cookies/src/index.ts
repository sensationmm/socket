import Cookies from 'js-cookie';

export enum CookiesKeys {
  allowCookies = 'allowCookies',
}

interface ICookieOptions {
  expires?: number;
}

export const set = (key: CookiesKeys, value: any, options: ICookieOptions = {}): any =>
  Cookies.set(key, value, { ...options });

export const get = (key: CookiesKeys): any => Cookies.get(key);

export const clear = (key: CookiesKeys) => Cookies.remove(key);

export const clearDomainCookies = (domain: string) => {
  const cookies = Cookies.get({ domain });
  if (cookies) {
    Object.keys(cookies).forEach((key) => {
      Cookies.remove(key, { domain });
    });
  }
};
