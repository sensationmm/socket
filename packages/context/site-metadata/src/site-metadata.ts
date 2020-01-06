import { createContext } from 'react';

export interface ISiteMetadata {
  siteUrl: string;
  ciamCommunityUrl: string;
  ciamClientId: string;
  sogUrl: string;
}

const defaultState: ISiteMetadata = {
  siteUrl: '',
  ciamCommunityUrl: '',
  ciamClientId: '',
  sogUrl: '',
};

export const SiteMetadataContext = createContext(defaultState);
