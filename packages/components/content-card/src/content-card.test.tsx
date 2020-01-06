import { shallow } from 'enzyme';
import * as React from 'react';

import ContentCard from '.';

describe('@somo/pda-components-content-card component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      emoji: 'smiley',
      header: 'Smart Only',
      body: "With us you need a smart meter, say bye to the spider in the cupboard - we're digital all the way!",
    };
  });

  it('should render without error', () => {
    wrapper = shallow(<ContentCard {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should render a title, a description and an emoji', () => {
    wrapper = shallow(<ContentCard {...props} />);

    expect(wrapper.find('[element="h2"]').length).toEqual(1);
    expect(wrapper.find('[element="p"]').length).toEqual(1);
    expect(wrapper.find('Emoji').length).toEqual(1);
  });

  it('should render a logo svg if emoji prop value is false', () => {
    props.emoji = '';
    wrapper = shallow(<ContentCard {...props} />);

    expect(wrapper.find('SVG').length).toEqual(1);
  });

  it('should render heading level override', () => {
    wrapper = shallow(<ContentCard {...props} headingLevel="h3" />);

    expect(wrapper.find('[element="h3"]').length).toEqual(1);
  });
});
