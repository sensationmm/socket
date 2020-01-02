import { shallow } from 'enzyme';
import React from 'react';

import Component, { ITimelineItemContentProps } from './timeline-item.component';

describe('Timeline', () => {
  let wrapper;

  const props: ITimelineItemContentProps = {
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

  it('should render without error', () => {
    wrapper = shallow(<Component {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should render current step', () => {
    wrapper = shallow(<Component {...props} isCurrent={true} />);
    expect(wrapper).toBeDefined();
  });

  it('should render future step', () => {
    wrapper = shallow(<Component {...props} isFuture={true} />);
    expect(wrapper).toBeDefined();
  });
});
