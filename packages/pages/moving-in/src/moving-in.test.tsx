import { shallow } from 'enzyme';
import * as React from 'react';

import MovingIn from '.';

const textObj = {
  text: 'text',
  image: 'iamge',
  list: ['boo', 'boo'],
};

jest.mock('react-i18next', () => ({
  useTranslation: () => [
    jest.fn().mockReturnValue([textObj, textObj, textObj]),
    { t: jest.fn().mockReturnValue('hi') },
  ],
}));

describe('@somo/pda-pages-moving-in', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      imagery: [
        {
          node: { name: 'energy-use-desktop', publicURL: '/static/energy-pie-10556973034b85890076c0dd1324ea97.png' },
        },
      ],
    };
    component = shallow(<MovingIn {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
