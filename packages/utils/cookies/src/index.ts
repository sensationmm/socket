import Cookies from 'js-cookie';

export enum CookiesKeys {
  allowCookies = 'allowCookies',
}

export const set = (key: CookiesKeys, value: any): any => Cookies.set(key, value);

export const get = (key: CookiesKeys): any => Cookies.get(key);

export const clear = (key: CookiesKeys) => Cookies.remove(key);
