const globalCacheKey = 'env';

// ADD ENV
export enum Env {
  BrandLong = 'BRAND_NAME_LONG',
  BrandShort = 'BRAND_NAME_SHORT',
  BuildId = 'BUILD_ID',
  SiteUrl = 'SITE_URL',
  ApiBaseUrl = 'API_BASE_URL',
  AuthorisationHeader = 'AUTHORISATION_HEADER',
}

export const setEnv = (obj: { [key in Env]: string }) => {
  if (typeof window !== 'undefined') {
    window[globalCacheKey] = { ...window[globalCacheKey], ...obj };
  }
};

export const getEnv = (key: Env) => {
  if (typeof window !== 'undefined') {
    return window[globalCacheKey][key] || '';
  }

  if (typeof process !== 'undefined') {
    return process[globalCacheKey][key] || '';
  }
};
