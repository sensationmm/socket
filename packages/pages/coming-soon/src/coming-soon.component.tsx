import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonTypes, Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import PageSection from '@somo/pda-components-page-section/src';
import Text from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

const ComingSoonPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <RegularLayout hero={t('site.comingSoon.hero', { returnObjects: true })}>
      <PageSection>
        <Text element="h2">{t('site.comingSoon.body')}</Text>
        <SecondaryBtn type={ButtonTypes.internalLink} link="/">
          {t('site.comingSoon.cta')}
        </SecondaryBtn>
      </PageSection>
    </RegularLayout>
  );
};

export default ComingSoonPage;
