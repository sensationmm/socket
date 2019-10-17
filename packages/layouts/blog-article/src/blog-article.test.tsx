import { shallow } from 'enzyme';
import * as React from 'react';

import BlogArticleLayout from '.';

describe('@somo/pda-layouts-blog-article component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      children: <div>foo</div>,
      hero: {
        heading: 'I need a hero!!',
        text: "I'm holding out for a hero 'til the end of the night ",
        cta: "I'm a cta",
      },
      footer: {
        title: 'Our smart technology needs a smart meter.',
        subTitle: "Check you're on the latest smart meter and start taking control your energy.",
        copyright: '2019 © Socket Energy. All rights reserved.',
      },
      author: {
        name: 'John Smith',
        avatar: '/path-to-img.jpg',
      },
      publicationDate: '2019-09-07T15:53:00+05:00',
      relatedArticles: {
        title: 'Related news',
        list: [
          {
            authorAvatar: 'https://picsum.photos/id/287/100/100',
            authorName: 'John Smith',
            publicationDate: '2019-09-07T15:53:00+05:00',
            title: 'Nulla vitae elit libero a pharetra.',
            shortDescription: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            cta: {
              text: 'Read article',
              link: 'http://google.com',
            },
          },
        ],
        cta: {
          text: 'See all news',
          link: 'http://google.com/',
        },
      },
    };
  });

  it('should render Regular Layout', () => {
    wrapper = shallow(<BlogArticleLayout {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should render a hero', () => {
    wrapper = shallow(<BlogArticleLayout {...props} />);
    expect(wrapper.find('PageHero').length).toBe(1);
  });

  it('should render a footer', () => {
    wrapper = shallow(<BlogArticleLayout {...props} />);
    expect(wrapper.find('Footer').length).toBe(1);
  });

  it('should render an article author', () => {
    wrapper = shallow(<BlogArticleLayout {...props} />);
    expect(wrapper.find('ArticleAuthor').length).toBe(1);
  });

  it('should render  lost of related articles', () => {
    wrapper = shallow(<BlogArticleLayout {...props} />);
    expect(wrapper.find('BlogPostCard').length).toBe(1);
  });
});
