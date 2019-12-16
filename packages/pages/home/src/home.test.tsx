import { shallow } from 'enzyme';
import * as React from 'react';

import Home from '.';

const textObj = {
  text: 'blah',
  image: 'energy-pie',
  list: ['boo', 'boo'],
};

jest.mock('react-i18next', () => ({
  useTranslation: () => [
    jest.fn().mockReturnValue([textObj, textObj, textObj]),
    { t: jest.fn().mockReturnValue('hi') },
  ],
}));
jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-home', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      imagery: [
        {
          node: { name: 'energy-pie', publicURL: '/static/energy-pie-10556973034b85890076c0dd1324ea97.png' },
        },
      ],
    };
    component = shallow(<Home {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
