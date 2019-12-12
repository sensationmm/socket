import { navigate } from 'gatsby';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import SecondaryButton from '@somo/pda-components-button/src/secondary';
import PageSection from '@somo/pda-components-page-section/src';
import Text from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

const ComingSoonPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <RegularLayout hero={t('site.comingSoon.hero', { returnObjects: true })}>
      <PageSection>
        <Text element="h2">{t('site.comingSoon.body')}</Text>
        <SecondaryButton onClick={() => navigate('/')}>{t('site.comingSoon.cta')}</SecondaryButton>
      </PageSection>
    </RegularLayout>
  );
};

export default ComingSoonPage;
