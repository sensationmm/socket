import { graphql } from 'gatsby';
import * as React from 'react';
// import { Article } from 'schema-dts';

import BlogArticle from '@somo/pda-pages-blog-article/src';

const Page = ({ data }) => {
  const doc = data.markdownRemark.frontmatter;
  const i18n = data.allTranslations.edges[0].node.site;

  if (!doc) {
    return null;
  }

  const { author, content, date, hero, title } = doc;

  const articleHero = {
    ...hero,
    author: author.frontmatter,
    publicationDate: date,
    title,
  };

  return <BlogArticle i18n={i18n} content={content} hero={articleHero} />;
};

export default Page;

export const query = graphql`
  query ArticleQuery($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author {
          frontmatter {
            bio
            fullName
            photo
          }
        }
        content {
          body
          excerpt
        }
        date
        hero {
          heroBackground
          bgImage
        }
        seo {
          metaDescription
          pageTitle
        }
        title
      }
      fields {
        slug
      }
    }
  }
`;
