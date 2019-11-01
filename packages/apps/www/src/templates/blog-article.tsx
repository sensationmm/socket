import { graphql } from 'gatsby';
import * as React from 'react';

import htmlSerializer from '../utils/html-serializer';

import BlogArticle from '@somo/pda-pages-blog-article/src';

const Page = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark;
  const i18n = data.allTranslations.edges[0].node.site;

  if (!frontmatter) {
    return null;
  }

  const { author, content, date, hero, title } = frontmatter;

  const articleHero = {
    ...hero,
    author: author.frontmatter,
    publicationDate: date,
    title,
  };

  content.body = htmlSerializer(fields.unified);

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
              sharePostHeader
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
        unified {
          type
          children {
            type
            value
            children {
              type
              value
              children {
                type
                value
                children {
                  type
                  url
                  value
                  children {
                    type
                    value
                  }
                }
              }
              url
            }
          }
        }
      }
    }
  }
`;
