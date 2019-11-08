// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import * as React from 'react';

import UserSwitch from './user-switch.component';
import { mapDispatchToProps } from './user-switch.container';

describe('@somo/pda-components-user-switch', () => {
  let props;
  let dispatch;

  beforeAll(() => {
    dispatch = jest.fn();
    props = mapDispatchToProps(dispatch);
  });

  it('renders a img tag if props.picture is truthy', () => {
    const Component = shallow(<UserSwitch {...props} />);

    expect(Component.find('Select').length).toEqual(1);
    expect(Component).toBeDefined();
  });

  it('should return an object containing functions in keys array', () => {
    const keys = ['selectUser'];

    keys.forEach((key, index) => {
      expect(props[key]).toBeDefined();
      props[key]();
      expect(dispatch).toHaveBeenCalledTimes(index + 1);
    });
  });
});
