import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import BlogPage from '@somo/pda-pages-blog/src';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Blog posts',
  description: 'See our blog posts',
  siteLanguage: 'en',
};

const Blog: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              content {
                excerpt
              }
              author {
                frontmatter {
                  fullName
                  bio
                  photo
                }
              }
              title
              date
            }
          }
        }
      }
    }
  `);
  const blogPosts = data.allMarkdownRemark.edges;
  const posts = blogPosts.map((post) => {
    const { fields, frontmatter } = post.node;

    return {
      date: frontmatter.date,
      title: frontmatter.title,
      authorName: frontmatter.author.frontmatter.fullName,
      link: `/post${fields.slug}`,
      shortDescription: frontmatter.content.excerpt,
    };
  });

  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <BlogPage posts={posts} />
    </SiteMetadataContext.Provider>
  );
};

export default Blog;
