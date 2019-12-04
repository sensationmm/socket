import * as React from 'react';
import { useTranslation } from 'react-i18next';

import PageSection from '@somo/pda-components-page-section/src';
import Text from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

const RegisterPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <RegularLayout hero={t('site.register.hero', { returnObjects: true })}>
      <PageSection>
        <Text element="h2">{t('site.register.body')}</Text>
      </PageSection>
    </RegularLayout>
  );
};

export default RegisterPage;
