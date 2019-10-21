import { createFilePath } from 'gatsby-source-filesystem';
import * as path from 'path';

import i18n from './src/locales/en';

export async function createPages({ actions, graphql }) {
  const { createPage } = actions;

  const result = await graphql(`
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/post${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-article.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

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

export function sourceNodes({ actions, createNodeId, createContentDigest }) {
  const { createNode } = actions;

  const nodeId = createNodeId('i18n');
  const nodeContent = JSON.stringify(i18n);

  const nodeData = Object.assign({}, i18n, {
    id: nodeId,
    parent: null,
    children: [],
    internal: {
      type: 'Translations',
      content: nodeContent,
      contentDigest: createContentDigest(i18n),
    },
  });
  createNode(nodeData);

  return;
}
