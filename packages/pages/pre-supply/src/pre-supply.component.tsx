import * as React from 'react';
import { useTranslation } from 'react-i18next';

import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import Timeline from '@somo/pda-components-timeline/src';
import OnboardingLayout from '@somo/pda-layouts-onboarding/src';

const PreSupply: React.FC = () => {
  const [t] = useTranslation();
  let loc = '';

  if (typeof window !== 'undefined') {
    loc = window.location.href;
  }
  let active = parseInt(loc.substr(loc.indexOf('step') + 5), 10);
  if (isNaN(active)) {
    active = 1;
  }

  return (
    <OnboardingLayout
      hero={{
        title: t('site.dashboard.preSupply.title', { name: 'Kevin' }),
        subtitle: t('site.dashboard.preSupply.subTitle'),
      }}
    >
      <PageSection style={PageSectionStyle.Secondary}>
        <Text element="h2" type={TextStyles.h2}>
          {t('site.dashboard.preSupply.timeline.title')}
        </Text>

        <Timeline
          activeStep={active}
          items={[
            {
              emoji: '🤓',
              heading: t('site.dashboard.preSupply.timeline.welcome.heading'),
              text: t('site.dashboard.preSupply.timeline.welcome.text'),
              notification: {
                heading: t('site.dashboard.preSupply.timeline.welcome.notification.heading'),
                text: t('site.dashboard.preSupply.timeline.welcome.notification.text'),
                label: t('site.dashboard.preSupply.timeline.welcome.notification.label'),
                link: t('site.dashboard.preSupply.timeline.welcome.notification.link'),
                action: '/account',
              },
            },
            {
              emoji: '💪🏼',
              heading: t('site.dashboard.preSupply.timeline.switching.heading'),
              text: t('site.dashboard.preSupply.timeline.switching.text'),
            },
            {
              emoji: '💖',
              heading: t('site.dashboard.preSupply.timeline.pending.heading'),
              text: t('site.dashboard.preSupply.timeline.pending.text'),
            },
            {
              emoji: '🌍',
              heading: t('site.dashboard.preSupply.timeline.connected.heading'),
              text: t('site.dashboard.preSupply.timeline.connected.text'),
            },
          ]}
        />
      </PageSection>
    </OnboardingLayout>
  );
};

export default PreSupply;
