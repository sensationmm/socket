const globalCacheKey = 'env';

// ADD ENV
export enum Env {
  Adobe = 'ADOBE_DTM',
  AiInstrumentationKey = 'AI_INSTRUMENTATION_KEY',
  AuthAuthority = 'AUTH_AUTHORITY',
  AuthClientId = 'AUTH_CLIENT_ID',
  AuthRedirect = 'AUTH_REDIRECT_URI',
  AzureServiceRegion = 'AZURE_SERVICE_REGION',
  AzureSubscriptionKey = 'AZURE_SUBSCRIPTION_KEY',
  BrandLong = 'BRAND_NAME_LONG',
  BrandShort = 'BRAND_NAME_SHORT',
  BuildId = 'BUILD_ID',
  Env = 'NODE_ENV',
  GoogleMapsApiKey = 'GOOGLE_GEOCODING_API_KEY',
  IdentityServiceUrl = 'IDENTITY_SERVICE_URL',
  OneTrustUrl = 'ONE_TRUST_URL',
  RecommendationServiceUrl = 'RECOMMENDATION_SERVICE_URL',
  SiteUrl = 'SITE_URL',
  StaticAssetsUrl = 'STATIC_ASSETS_URL',
  UserServiceUrl = 'USER_SERVICE_URL',
  PartnerServiceUrl = 'PARTNER_SERVICE_URL',
  VehicleServiceUrl = 'VEHICLE_SERVICE_URL',
  WbacServiceUrl = 'WBAC_SERVICE_URL',
  ApimProductWebSubscriptionKey = 'APIM_PRODUCT_WEB_SUBSCRIPTION_KEY',
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
