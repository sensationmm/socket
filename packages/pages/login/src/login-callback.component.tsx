import * as React from 'react';
import Helmet from 'react-helmet';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';

const LoginCallback: React.FC = () => {
  return (
    <SiteMetadataContext.Consumer>
      {(siteMetadata) => (
        <Helmet title={'Login Callback'}>
          <meta name="salesforce-community" content="https://sitciam-eciam.cs106.force.com/SocketEnergy" />
          <meta name="salesforce-mode" content="inline-callback" />
          <meta name="salesforce-allowed-domains" content={`${siteMetadata.siteUrl}`} />
          <meta name="salesforce-save-access-token" content="true" />
          <script
            src="https://sitciam-eciam.cs106.force.com/SocketEnergy/servlet/servlet.loginwidgetcontroller?type=javascript_widget"
            async={true}
            defer={true}
          />
        </Helmet>
      )}
    </SiteMetadataContext.Consumer>
  );
};

export default LoginCallback;
