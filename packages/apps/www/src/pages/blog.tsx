import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import BlogPage from '@somo/pda-pages-blog/src';

import SEO from '../components/seo.component';

const SEOProps = {
  title: 'blog',
  description: 'blog description',
  siteLanguage: 'en_GB',
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

  return (
    <>
      <SEO {...SEOProps} />
      <BlogPage posts={posts} />
    </>
  );
};

export default Blog;
