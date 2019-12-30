import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import { graphql } from 'gatsby';
import * as React from 'react';

import BlogArticle from '@somo/pda-pages-blog-article/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';
import htmlSerializer from '../utils/html-serializer';

export const query = graphql`
  query ArticleQuery($slug: String!) {
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
          children {
            type
            children {
              type
              value
            }
          }
        }
      }
    }
  }
`;

const Page = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark;

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

  const SEOProps = {
    title,
    description: title,
    siteLanguage: 'en',
  };

  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <BlogArticle content={content} hero={articleHero} />
    </SiteMetadataContext.Provider>
  );
};

export default Page;
