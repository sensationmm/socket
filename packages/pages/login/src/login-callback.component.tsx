import * as React from 'react';
import Helmet from 'react-helmet';

import { Env, getEnv } from '@somo/pda-utils-env/src';

const LoginCallback = () => {
  return (
    <Helmet title={'Login Callback'}>
      <meta name="salesforce-community" content="https://sitciam-eciam.cs106.force.com/SocketEnergy" />
      <meta name="salesforce-mode" content="inline-callback" />
      <meta name="salesforce-allowed-domains" content={`${getEnv(Env.SiteUrl)}`} />
      <meta name="salesforce-save-access-token" content="true" />
      <script
        src="https://sitciam-eciam.cs106.force.com/SocketEnergy/servlet/servlet.loginwidgetcontroller?type=javascript_widget"
        async={true}
        defer={true}
      />
    </Helmet>
  );
};

export default LoginCallback;
