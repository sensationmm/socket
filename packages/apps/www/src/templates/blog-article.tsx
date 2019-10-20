import { graphql } from 'gatsby';
import * as React from 'react';
// import { Article } from 'schema-dts';

// import BlogArticle from '@somo/pda-pages-blog-article/src';

const Page = ({ data }) => {
  return <div>{data}</div>;
};

export default Page;

export const query = graphql`
  query ArticleQuery($title: String) {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: $title } } }) {
      edges {
        node {
          frontmatter {
            date
            content {
              body
              excerpt
            }
            hero {
              heroBackground
            }
            seo {
              metaDescription
              pageTitle
            }
            title
            id
            author {
              frontmatter {
                id
                authorDescription
              }
            }
          }
        }
      }
    }
  }
`;
