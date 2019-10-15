import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

describe('checkbox component', () => {
  let wrapper;
  let props;

  describe('default', () => {
    beforeEach(() => {
      props = {
        listContent: [
          'Set goals for how much you spend',
          'Regular tips from our boffins to help you save',
          'Easily check and compare your history',
          'See forecasts based on what you use',
        ],
      };
    });

    it('should render and render number of li ', () => {
      wrapper = shallow(<Component {...props} />);

      expect(wrapper).toBeDefined();
      expect(wrapper.find('ul li').length).toBe(props.listContent.length);
    });
  });
});
