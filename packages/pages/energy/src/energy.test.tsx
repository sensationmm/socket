import { shallow } from 'enzyme';
import * as React from 'react';

import Energy from '.';

const textObj = {
  text: 'Some text',
  image: 'office',
  list: ['item1', 'item2'],
};

jest.mock('react-i18next', () => ({
  useTranslation: () => [
    jest.fn().mockReturnValue([textObj, textObj, textObj]),
    { t: jest.fn().mockReturnValue('hi') },
  ],
}));
jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-energy', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Energy />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
