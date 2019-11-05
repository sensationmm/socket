import * as React from 'react';

import PageSection from '@somo/pda-components-page-section/src';
import Text from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

interface IFourOhFourProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer' | 'fourOhFour'>;
}

const ErrorPage: React.FC<IFourOhFourProps> = ({ i18n }) => {
  const { fourOhFour, footer } = i18n;
  const { hero, body } = fourOhFour;

  return (
    <RegularLayout hero={hero} footer={footer}>
      <PageSection>
        <Text element="h2">{body}</Text>
      </PageSection>
    </RegularLayout>
  );
};

export default ErrorPage;
