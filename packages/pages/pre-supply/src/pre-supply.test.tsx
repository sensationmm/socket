import { shallow } from 'enzyme';
import * as React from 'react';

import PreSupply from '.';

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

describe('@somo/pda-pages-pre-supply', () => {
  let component;

  beforeAll(() => {
    component = shallow(<PreSupply />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
