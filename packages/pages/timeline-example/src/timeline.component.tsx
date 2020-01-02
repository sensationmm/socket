import * as React from 'react';

import PageSection from '@somo/pda-components-page-section/src';
import Timeline from '@somo/pda-components-timeline/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

const TimelineExample: React.FC = () => {
  let loc = '';

  if (typeof window !== 'undefined') {
    loc = window.location.href;
  }
  let active = parseInt(loc.substr(loc.indexOf('step') + 5), 10);
  if (isNaN(active)) {
    active = 1;
  }

  return (
    <RegularLayout
      hero={{ title: 'Welcome to Socket, Mark!', subTitle: "You've made the right choice. Let’s get you started." }}
    >
      <PageSection>
        <Timeline
          activeStep={active}
          items={[
            {
              emoji: '🤓',
              heading: 'Welcome!',
              text: 'You signed up 11.10.2019. Your account was set up.',
              notification: {
                heading: "While you're here",
                text: 'Why not add more details such as Contact Preferences and Priority Services Register (PSR).',
                label: 'Contact Preferences',
                link: 'Add more detail',
                action: '/account',
              },
            },
            {
              emoji: '💪🏼',
              heading: 'SWITCH IN PROGRESS',
              text:
                'We’re contacting your current supplier to switch you over to Socket. Don’t worry - nothing you need to do, we’ve got it.',
            },
            {
              emoji: '💖',
              heading: 'ONLY 5 DAYS TO GO',
              text:
                "Good news! Only 5 days to go, because you're with Socket and you've got a smart meter - there's no need for meter readings, easy peasy!",
            },
            {
              emoji: '🌍',
              heading: 'CONNECTED TO SOCKET',
              text: 'On this day, your first monthly payment will be taken. Then you’ll be connected!',
            },
          ]}
        />
      </PageSection>
    </RegularLayout>
  );
};

export default TimelineExample;
