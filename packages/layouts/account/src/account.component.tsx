import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import Footer from '@somo/pda-components-footer/src';
import NavBar from '@somo/pda-components-navbar/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import { FooterNavigation } from '@somo/pda-layouts-regular/src/navigation';

const AccountLayout: React.FC = ({ children }) => {
  return (
    <AppTemplate>
      <PageSection element="header" style={PageSectionStyle.PrimaryPattern}>
        <NavBar />
      </PageSection>
      <main>{children}</main>
      <Footer menu={FooterNavigation} />
    </AppTemplate>
  );
};

export default AccountLayout;
