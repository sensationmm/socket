import { graphql } from 'gatsby';
import * as React from 'react';

import ContentPage from '@somo/pda-pages-content/src';

import SEO from '../components/seo.component';

const Page = ({ data }) => {
  const doc = data.markdownRemark.frontmatter;

  if (!doc) {
    return null;
  }

  const { content, hero, title } = doc;
  const { body, subTitle } = content;

  const contentPageHero = {
    ...hero,
    title,
  };

  const SEOProps = {
    title,
    description: title,
    siteLanguage: 'en',
  };

  return (
    <>
      <SEO {...SEOProps} />
      <ContentPage subTitle={subTitle} body={body} hero={contentPageHero} />
    </>
  );
};

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        content {
          body
          subTitle
        }
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
