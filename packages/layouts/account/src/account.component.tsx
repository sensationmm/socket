import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import Footer from '@somo/pda-components-footer/src';
import { FooterNavigation } from '@somo/pda-layouts-regular/src/navigation';

const AccountLayout: React.FC = ({ children }) => {
  return (
    <AppTemplate>
      <main>{children}</main>
      <Footer menu={FooterNavigation} />
    </AppTemplate>
  );
};

export default AccountLayout;
