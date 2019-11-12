import { shallow } from 'enzyme';
import * as React from 'react';

import Component from '.';

const tabs = [
  {
    label: 'Electricity',
    emoji: '🔥',
    content: <div>Electricity content goes here</div>,
  },
  {
    label: 'Gas',
    content: <div>Gas content goes here</div>,
  },
  {
    label: 'Water',
    content: <div>Water content goes here</div>,
  },
];

describe('@somo/pda-components-tabs component', () => {
  let wrapper;

  it('should render without error', () => {
    wrapper = shallow(<Component tabs={tabs} />);

    expect(wrapper).toBeDefined();
    expect(wrapper.find('.activeTab').length).toBe(1);
    expect(wrapper.find('.activeContent').length).toBe(1);
  });

  it('sets active tab', () => {
    expect(wrapper.find('[data-test="tab-content-1"]').hasClass('activeContent')).toEqual(false);
    wrapper.find('[data-test="tab-1"]').simulate('click');
    expect(wrapper.find('[data-test="tab-content-1"]').hasClass('activeContent')).toEqual(true);
  });

  it('prop variants', () => {
    wrapper = shallow(<Component tabs={tabs} defaultTab={2} fixedHeight={200} />);

    expect(wrapper.find('[data-test="tab-content-2"]').hasClass('activeContent')).toEqual(true);
    expect(wrapper.find('[data-test="content"]').props().style.height).toEqual('200px');
  });
});
