import React, { useContext } from 'react';
import Helmet from 'react-helmet';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';

const LoginCallback = () => {
  const siteMetadata = useContext(SiteMetadataContext);

  return (
    <Helmet title={'Login'}>
      <meta name="salesforce-community" content={siteMetadata.ciamCommunityUrl} />
      <meta name="salesforce-mode" content="inline-callback" />
      <meta name="salesforce-allowed-domains" content="localhost:8000" />
      <meta name="salesforce-save-access-token" content="true" />
      <script>
        {`document.querySelector('meta[name="salesforce-allowed-domains"]').setAttribute('content', window.location.host);`}
      </script>
      <script
        src={`${siteMetadata.ciamCommunityUrl}/servlet/servlet.loginwidgetcontroller?type=javascript_widget`}
        async={true}
        defer={true}
      />
    </Helmet>
  );
};

export default LoginCallback;
