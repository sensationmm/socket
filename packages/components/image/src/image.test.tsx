import { shallow } from 'enzyme';
import * as React from 'react';

import Image from '.';

describe('Image', () => {
  it('should render', () => {
    const component = shallow(<Image src="foo.bar" i18n={{ noImage: 'foo' }} />);
    expect(component).toBeDefined();
  });

  it('renders a LazyImage component', () => {
    const component = shallow(<Image isLazy={true} src="foo.bar" i18n={{ noImage: 'foo' }} />);
    expect(component.find('LazyImage').exists()).toBeTruthy();
  });

  it('renders a Holding image if there is an error', () => {
    const component = shallow(
      <Image
        isLazy={false}
        src=""
        i18n={{ noImage: 'foo' }}
        onError={(e) => (e.target.src = 'http://via.placeholder.com/100?text=ERROR')}
      />,
    );

    expect(component.find('HoldingImage').exists()).toBeTruthy();
  });

  // it('updateError()', () => {
  //   const setState = jest.fn();
  //   const useStateSpy = jest.spyOn(React, 'useState')
  //   const updateErrorMock = jest.spyOn(React, 'useState');
  //   updateErrorMock.mockImplementation((init: () => void) => [init, setState]);

  //   const component = shallow(<Image src="" i18n={{ noImage: 'foo' }} />);

  //   console.log(component.instance());

  //   expect(updateErrorMock).toHaveBeenCalled();
  // });
});
