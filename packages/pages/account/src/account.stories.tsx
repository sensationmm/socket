import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import AccountPage from '@somo/pda-pages-account/src';

const props = {
  i18n: {
    footer: {
      title: 'Our smart technology needs a smart meter.',
      subTitle: "Check you're on the latest smart meter and start taking control your energy.",
      copyright: '2019 © Socket Energy. All rights reserved.',
    },
    account: {
      title: 'Account',
      personal: {
        title: 'Personal Deets',
        subtitle: "That's you!",
        nameLabel: 'Name',
        accountNumberLabel: 'Account Number',
        supplyAddressLabel: 'Supply Address',
        emailLabel: 'Email',
        phoneLabel: 'Phone Number',
        passwordLabel: 'Password',
        correspondenceAddressLabel: 'Correspondence Address',
      },
    },
  },
};

storiesOf('Pages|account', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('default', () => {
    return <AccountPage {...props} />;
  });
