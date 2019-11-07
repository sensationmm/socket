import { createFilePath } from 'gatsby-source-filesystem';
import * as path from 'path';
import parsed from 'remark-parse';
import unified from 'unified';

export async function createPages({ actions, graphql }) {
  const { createPage } = actions;

  const blogs = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  blogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/post${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-article.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const contentPages = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  contentPages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${node.fields.slug}`,
      component: path.resolve(`./src/templates/content-page.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  const markdown = ((node.frontmatter || {}).content || {}).body;
  if (markdown) {
    createNodeField({
      name: `unified`,
      node,
      value: unified()
        .use(parsed)
        .parse(markdown),
    });
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

export function onCreateWebpackConfig({ loaders, actions }) {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /gatsby-source-graphql-universal/,
          use: [loaders.js()],
        },
      ],
    },
  });
}
