const hasWindow = typeof window !== 'undefined';

export enum StorageKeys {
  auth = 'authentication',
}

export const get = (key: StorageKeys): any => {
  if (hasWindow) {
    return JSON.parse(window.sessionStorage.getItem(key) || '{}');
  }

  return {};
};

export const update = (key: StorageKeys, data): void => {
  const current = get(key);

  if (hasWindow) {
    window.sessionStorage.setItem(key, JSON.stringify({ ...current, ...data }));
  }
};

export const clear = (key: StorageKeys) => {
  if (hasWindow) {
    window.sessionStorage.setItem(key, '');
  }
};
