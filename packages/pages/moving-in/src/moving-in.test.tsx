import { shallow } from 'enzyme';
import * as React from 'react';

import MovingIn from '.';
import { IMovingInPageProps } from './moving-in.component';

const textObj = {
  text: 'text',
  image: 'image',
  list: ['boo', 'boo'],
};

jest.mock('react-i18next', () => ({
  useTranslation: () => [
    jest.fn().mockReturnValue([textObj, textObj, textObj]),
    { t: jest.fn().mockReturnValue('hi') },
  ],
}));

jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-moving-in', () => {
  let component;
  let props: IMovingInPageProps;

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
