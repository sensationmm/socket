import { shallow } from 'enzyme';
import * as React from 'react';

import { AvatarSizes } from '@somo/pda-components-avatar/src';
import { Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import Component from '.';

describe('@somo/pda-components-blog-post-card component', () => {
  let wrapper;
  const props = {
    authorName: 'John Smith',
    authorAvatar: '/path-to-image.png',
    date: '2019-09-07T15:53:00+05:00',
    title: 'Some title',
    shortDescription: 'Some information',
    cta: 'Click here',
    link: '/',
  };

  it('should render a content box', () => {
    wrapper = shallow(<Component {...props} height={500} />);
    expect(wrapper).toBeDefined();
    const contentBox = wrapper.find('ContentBox');
    expect(contentBox.length).toEqual(1);
    expect(contentBox.props().height).toEqual(500);
  });

  it('should render the article author', () => {
    wrapper = shallow(<Component {...props} />);
    const articleAuthor = wrapper.find('ArticleAuthor');
    const articleAuthorProps = articleAuthor.props();
    expect(articleAuthor.length).toEqual(1);
    expect(articleAuthorProps).toMatchObject({
      name: props.authorName,
      avatar: props.authorAvatar,
      date: props.date,
      avatarSize: AvatarSizes.Small,
    });
  });

  it('should render the full title if title prop length is less or equal than maximum specified title length', () => {
    wrapper = shallow(<Component {...props} maxTitleLength={10} />);
    const titleText = wrapper
      .find('Text')
      .at(0)
      .childAt(0);
    expect(titleText.text()).toEqual(props.title);
  });

  it('should render the trimmed title if title prop length is bigger than maximum specified title length', () => {
    wrapper = shallow(<Component {...props} maxTitleLength={4} />);
    const titleText = wrapper
      .find('Text')
      .at(0)
      .childAt(0);
    expect(titleText.text()).toEqual('Some...');
  });

  it('should render the full description if description prop length is less or equal than maximum specified description length', () => {
    wrapper = shallow(<Component {...props} maxShortDescriptionLength={20} />);
    const descriptionText = wrapper
      .find('Text')
      .at(1)
      .childAt(0);
    expect(descriptionText.text()).toEqual(props.shortDescription);
  });

  it('should render the full description if description prop length is less or equal than maximum specified description length', () => {
    wrapper = shallow(<Component {...props} maxShortDescriptionLength={6} />);
    const descriptionText = wrapper
      .find('Text')
      .at(1)
      .childAt(0);
    expect(descriptionText.text()).toEqual('Some i...');
  });

  it('should render a link', () => {
    wrapper = shallow(<Component {...props} />);
    const link = wrapper.find(SecondaryBtn);
    const linkProps = link.props();
    expect(linkProps).toMatchObject({
      link: props.link,
      title: props.cta,
    });
    expect(link.childAt(0).text()).toEqual(props.cta);
  });
});
