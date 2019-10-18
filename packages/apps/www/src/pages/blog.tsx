import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import BlogPage from '@somo/pda-pages-blog/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'blog',
  description: 'blog description',
  siteLanguage: 'en_GB',
};

const Blog: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query BlogQuery {
      allTranslations {
        edges {
          node {
            site {
              blog {
                hero {
                  title
                  subTitle
                }
                buttonRead
              }
              footer {
                title
                subTitle
                copyright
              }
            }
          }
        }
      }
    }
  `);
  const i18n = data.allTranslations.edges[0].node.site;

  const posts = [
    {
      id: '1',
      authorName: 'Kevin Reynolds',
      date: '2019-10-01',
      title: 'Test blog post',
      link: 'http://www.google.com',
      shortDescription: 'This is a short intro of the topic.',
    },
    {
      id: '2',
      authorName: 'Kevin Reynolds',
      date: '2019-10-03',
      title: 'Another blog post',
      link: 'http://www.google.com',
      shortDescription: 'This is a short intro of the topic.',
    },
    {
      id: '3',
      authorName: 'Kevin Reynolds',
      date: '2019-10-03',
      title: 'Another blog post',
      link: 'http://www.google.com',
      shortDescription: 'This is a short intro of the topic.',
    },
    {
      id: '4',
      authorName: 'Kevin Reynolds',
      date: '2019-10-03',
      title: 'Another blog post',
      link: 'http://www.google.com',
      shortDescription: 'This is a short intro of the topic.',
    },
    {
      id: '5',
      authorName: 'Kevin Reynolds',
      date: '2019-10-03',
      title: 'Another blog post',
      link: 'http://www.google.com',
      shortDescription: 'This is a short intro of the topic.',
    },
    {
      id: '6',
      authorName: 'Kevin Reynolds',
      date: '2019-10-03',
      title: 'Another blog post',
      link: 'http://www.google.com',
      shortDescription: 'This is a short intro of the topic.',
    },
    {
      id: '7',
      authorName: 'Kevin Reynolds',
      date: '2019-10-03',
      title: 'Another blog post',
      link: 'http://www.google.com',
      shortDescription: 'This is a short intro of the topic.',
    },
  ];

  return (
    <>
      <SEO {...SEOprops} />
      <BlogPage i18n={i18n} posts={posts} />
    </>
  );
};

export default Blog;
