import * as React from 'react';
import { useTranslation } from 'react-i18next';

import PageSection from '@somo/pda-components-page-section/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

const RegistrationSuccessPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <RegularLayout hero={t('site.registrationSuccess.hero', { returnObjects: true })}>
      <PageSection>
        <Text element="h2" type={TextStyles.h2}>
          {t('site.registrationSuccess.body')}
        </Text>
      </PageSection>
    </RegularLayout>
  );
};

export default RegistrationSuccessPage;
