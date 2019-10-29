import { graphql } from 'gatsby';
import * as React from 'react';

import ContentPage from '@somo/pda-pages-content/src';

const Page = ({ data }) => {
  const doc = data.markdownRemark.frontmatter;
  const i18n = data.allTranslations.edges[0].node.site;

  if (!doc) {
    return null;
  }

  const { content, hero, title } = doc;
  const { body, subTitle } = content;

  const contentPageHero = {
    ...hero,
    title,
  };

  return <ContentPage i18n={i18n} subTitle={subTitle} body={body} hero={contentPageHero} />;
};

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
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
      html
      frontmatter {
        content {
          body
          subTitle
        }
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
