import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import Footer from '@somo/pda-components-footer/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import { FooterNavigation } from '@somo/pda-layouts-regular/src/navigation';

interface IFooterI18nProps {
  title: string;
  subTitle: string;
  copyright: string;
}

interface IAccountLayoutProps {
  footer: IFooterI18nProps;
}

const AccountLayout: React.FC<IAccountLayoutProps> = ({ footer, children }) => {
  return (
    <AppTemplate>
      {children}
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <Footer i18n={footer} menu={FooterNavigation} />
      </PageSection>
    </AppTemplate>
  );
};

export default AccountLayout;
