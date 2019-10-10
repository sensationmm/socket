import { shallow } from 'enzyme';
import * as React from 'react';

import FourOh from '.';

describe('@somo/pda-pages-404', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      i18n: {
        footer: {
          title: 'Our smart technology needs a smart meter.',
          subTitle: "Check you're on the latest smart meter and start taking control your energy.",
          copyright: '2019 © Socket Energy. All rights reserved.',
        },
        fourOhFour: {
          hero: {
            title: 'Coming Soon',
          },
          body: "We haven't built this page yet! Come back soon",
        },
      },
    };

    component = shallow(<FourOh {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
