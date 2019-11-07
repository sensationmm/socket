import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import Footer from '@somo/pda-components-footer/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import { FooterNavigation } from '@somo/pda-layouts-regular/src/navigation';

const AccountLayout: React.FC = ({ children }) => {
  return (
    <AppTemplate>
      {children}
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <Footer menu={FooterNavigation} />
      </PageSection>
    </AppTemplate>
  );
};

export default AccountLayout;
