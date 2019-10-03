import i18n from './src/locales/en';

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
