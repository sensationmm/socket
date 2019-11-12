import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import CookieNotice from '.';

storiesOf('Components|cookie-notice', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator((story) => <div style={{ width: '80vw' }}>{story()}</div>)
  .add('Default', () => (
    <CookieNotice
      title="Privacy Policy"
      text="We use cookies to give you the best possible online experience, ensuring our websites are reliable and secure. By agreeing, you allow the use of cookies for marketing purposes. You can read more about"
      link={{ text: 'how we use cookies and how you can control them', address: 'http://google.com/' }}
      cta={{ agree: 'I agree', disagree: 'No thanks!' }}
    />
  ));
