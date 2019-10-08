import { shallow } from 'enzyme';
import * as React from 'react';

import FourOh from '.';

describe('@somo/pda-pages-404', () => {
  let component;
  let props;


  beforeAll(() => {
    props = {
      i18n: {
        hero: {
          title: 'Take control. Own your energy.',
        },
        body: 'Some text string',
      },
    };

    component = shallow(<FourOh {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
