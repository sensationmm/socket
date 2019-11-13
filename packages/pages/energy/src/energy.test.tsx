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

describe('@somo/pda-pages-energy', () => {
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
    component = shallow(<Energy {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
