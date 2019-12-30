export const isProduction = (siteUrl: string): boolean => {
  return siteUrl.includes('socketenergy.co.uk');
};

export const isLocal = (siteUrl: string): boolean => {
  return siteUrl === 'https://localhost:8000';
};
