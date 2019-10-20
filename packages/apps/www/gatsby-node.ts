import * as path from 'path';
import i18n from './src/locales/en';

export async function createPages({ actions, graphql }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // tslint:disable-next-line: no-console
  console.log('result', result);

  createPage({
    path: `/post/*`,
    component: path.resolve(`./src/templates/blog-article.tsx`),
  });
}

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
