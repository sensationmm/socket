import { shallow } from 'enzyme';
import * as React from 'react';

import About from '.';

const textObj = {
  text: 'blah',
  image: 'office',
  list: ['boo', 'boo'],
};

jest.mock('react-i18next', () => ({
  useTranslation: () => [
    jest.fn().mockReturnValue([textObj, textObj, textObj]),
    { t: jest.fn().mockReturnValue('hi') },
  ],
}));
jest.mock('@somo/pda-layouts-regular/src', () => jest.fn((props) => <span>{props.children}</span>));

describe('@somo/pda-pages-about', () => {
  let component;
  const props = {
    imagery: [
      {
        node: { name: 'office', publicURL: 'https://picsum.photos/id/950/400/300' },
      },
      {
        node: { name: 'reading', publicURL: 'https://picsum.photos/id/951/400/300' },
      },
    ],
  };

  beforeEach(() => {
    component = shallow(<About {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
