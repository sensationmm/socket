import { createContext } from 'react';

export interface ISiteMetadata {
  siteUrl: string;
  ciamCommunityUrl: string;
  ciamClientId: string;
}

const defaultState: ISiteMetadata = {
  siteUrl: '',
  ciamCommunityUrl: '',
  ciamClientId: '',
};

export const SiteMetadataContext = createContext(defaultState);
