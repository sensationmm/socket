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
    publishDate: date,
    title,
  };

  return (
    <BlogArticle i18n={i18n} author={author.frontmatter} content={content} publishDate={date} hero={articleHero} />
  );
};

export default Page;

export const query = graphql`
  query ArticleQuery($slug: String) {
    allTranslations {
      edges {
        node {
          site {
            footer {
              title
              subTitle
              copyright
            }
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        author {
          frontmatter {
            bio
            fullName
            photo
            hero {
              heroBackground
            }
          }
        }
        content {
          body
          excerpt
        }
        date
        hero {
          heroBackground
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
