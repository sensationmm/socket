import { shallow } from 'enzyme';
import * as React from 'react';

import Home from '.';

describe('@somo/pda-pages-home', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      i18n: {
        hero: {
          title: 'title',
          subTitle: 'subTitle',
          cta: {
            text: 'CTA',
            url: 'https://site.com',
          },
        },
      },
    };
    component = shallow(<Home {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
