import { graphql, useStaticQuery } from 'gatsby';

import { ISiteMetadata } from '@somo/pda-context-site-metadata/src';

interface ISiteMetadataResult {
  site: {
    siteMetadata: ISiteMetadata;
  };
}

export const useSiteMetadata = (): ISiteMetadata => {
  const { site } = useStaticQuery<ISiteMetadataResult>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteUrl
            ciamCommunityUrl
            ciamClientId
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};
