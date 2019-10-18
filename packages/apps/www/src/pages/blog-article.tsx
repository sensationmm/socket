import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import BlogArticlePage from '@somo/pda-pages-blog-article/src';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'blog-article',
  description: 'blog article description',
  siteLanguage: 'en_GB',
};

const BlogArticle: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query BlogArticleQuery {
      allTranslations {
        edges {
          node {
            site {
              footer {
                title
                subTitle
                copyright
              }
              blogArticle {
                hero {
                  title
                  bgImage
                  author {
                    name
                    avatar
                  }
                  publicationDate
                }
                content {
                  type
                  tag
                  content
                }
                relatedArticles {
                  title
                  list {
                    authorAvatar
                    authorName
                    publicationDate
                    title
                    shortDescription
                    cta {
                      text
                      link
                    }
                  }
                  cta {
                    text
                    link
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const i18n = data.allTranslations.edges[0].node.site;

  return (
    <>
      <SEO {...SEOprops} />
      <BlogArticlePage i18n={i18n} />
    </>
  );
};

export default BlogArticle;
