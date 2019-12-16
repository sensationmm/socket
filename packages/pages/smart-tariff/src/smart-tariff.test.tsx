import { shallow } from 'enzyme';
import * as React from 'react';

import SmartTariff from '.';

const pointsList = ['some text', 'another text'];
const switchingContent = [
  {
    title: 'some title',
    text: 'some text',
    icon: 'icon',
  },
  {
    title: 'another title',
    text: 'another text',
    icon: 'another-icon',
  },
];

jest.mock('react-i18next', () => ({
  useTranslation: () => [
    jest.fn().mockReturnValue([pointsList, switchingContent]),
    { t: jest.fn().mockReturnValue('hi') },
  ],
}));
jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-smart-tariff', () => {
  let component;
  const props = {
    imagery: [
      {
        node: { name: 'pie-chart', publicURL: 'https://picsum.photos/id/950/400/300' },
      },
    ],
  };

  beforeEach(() => {
    component = shallow(<SmartTariff {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
