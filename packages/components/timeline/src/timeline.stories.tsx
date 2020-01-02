import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Component from './index';
import Item from './timeline-item.component';

storiesOf('Components|timeline', module)
  .add('Default', () => (
    <Component
      activeStep={number('activeStep', 2, { min: 1, max: 3 })}
      items={[
        {
          emoji: '👋',
          heading: 'Welcome',
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
          emoji: '👋',
          heading: 'Welcome',
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
          emoji: '👋',
          heading: 'Welcome',
          text: 'You signed up 11.10.2019. Your account was set up.',
          notification: {
            heading: "While you're here",
            text: 'Why not add more details such as Contact Preferences and Priority Services Register (PSR).',
            label: 'Contact Preferences',
            link: 'Add more detail',
            action: '/account',
          },
        },
      ]}
    />
  ))
  .add('timeline-item', () => (
    <Item
      emoji={text('emoji', '🐼')}
      heading={text('heading', 'Heading')}
      text={text('text', 'Some explanatory text about this step')}
      isCurrent={boolean('isCurrent', false)}
      isFuture={boolean('isFuture', false)}
      notification={{
        heading: text('notification.heading', 'Notification'),
        text: text('notification.text', 'Something you need to do something about'),
        label: text('notification.label', 'Contact Preferences'),
        link: text('notification.link', 'Add more details'),
        action: text('notification.action', '/account'),
      }}
    />
  ));
