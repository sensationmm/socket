import { shallow } from 'enzyme';
import React from 'react';

import Component from '.';
import { ITimelineItemContentProps } from './timeline-item.component';
import { ITimelineProps } from './timeline.component';

const item: ITimelineItemContentProps = {
  emoji: '👋',
  heading: 'Welcome',
  text: 'You signed up 11.10.2019. Your account was set up.',
  notification: {
    heading: "While you're here",
    text: 'Why not add more details such as Contact Preferences and Priority Services Register (PSR).',
    label: 'Contact Preferences',
    link: 'Add more detail',
    action: '/account',
  },
};

const items = [item, item, item];

describe('Timeline', () => {
  let wrapper;

  const props: ITimelineProps = {
    items,
    activeStep: 1,
  };

  it('should render without error', () => {
    wrapper = shallow(<Component {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('renders empty state', () => {
    wrapper = shallow(<Component {...props} items={[]} />);
    expect(wrapper).toBeDefined();
  });
});
