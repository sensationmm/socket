import { shallow } from 'enzyme';

import * as React from 'react';

import ContentCard from '.';

const contentCardMock = {
  emoji: 'smiley',
  header: 'Smart Only',
  body: "With us you need a smart meter, say bye to the spider in the cupboard - we're digital all the way!",
};

describe('@somo/pda-components-content-card component', () => {
  let wrapper;

  it('should render without error', () => {
    wrapper = shallow(<ContentCard {...contentCardMock} />);
    expect(wrapper).toBeDefined();
  });

  it('should render a title, a description and an emoji', () => {
    wrapper = shallow(<ContentCard {...contentCardMock} />);

    expect(wrapper.find('[element="h3"]').length).toEqual(1);
    expect(wrapper.find('[element="p"]').length).toEqual(1);
    expect(wrapper.find('Emoji').length).toEqual(1);
  });
});
