import { Env, getEnv } from '@somo/pda-utils-env/src';

export const showInDevOnly = () => {
  const siteUrl = getEnv(Env.SiteUrl);

  return !siteUrl.includes('socketenergy');
};
