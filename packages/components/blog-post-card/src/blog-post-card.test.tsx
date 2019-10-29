import { shallow } from 'enzyme';
import { Link } from 'gatsby';
import * as React from 'react';

import { AvatarSizes } from '@somo/oxd-components-avatar/src';
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
    link: 'http://google.com/',
  };

  it('should render a content box', () => {
    wrapper = shallow(<Component {...props} />);
    expect(wrapper).toBeDefined();

    expect(wrapper.find('ContentBox').length).toEqual(1);
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

  it('should render a gatsby link', () => {
    wrapper = shallow(<Component {...props} />);
    const link = wrapper.find(Link);
    const linkProps = link.props();
    expect(linkProps).toMatchObject({
      to: props.link,
      target: '_self',
      title: props.cta,
    });
    expect(
      link
        .childAt(0)
        .childAt(0)
        .text(),
    ).toEqual(props.cta);
  });
});
