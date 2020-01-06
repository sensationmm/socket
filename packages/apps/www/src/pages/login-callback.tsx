import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import { LoginCallback as Callback } from '@somo/pda-pages-login/src';
import { useSiteMetadata } from '../hooks';

const LoginCallback: React.FC = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <Callback />
    </SiteMetadataContext.Provider>
  );
};

export default LoginCallback;
