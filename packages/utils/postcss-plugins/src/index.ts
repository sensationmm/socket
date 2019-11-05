import * as webpack from 'webpack';

// tslint:disable-next-line no-var-requires
const tokens = require('@somo/pda-utils-tokens/src');
const imports = tokens.toJSON(tokens.default);

const plugins = (loader: webpack.loader.LoaderContext) => [
  require('stylelint')(),
  require('postcss-reporter')(),
  require('postcss-browser-reporter')(),
  require('postcss-nested'),
  require('postcss-preset-env')({
    stage: 1,
    autoprefixer: { grid: true },
    preserve: false,
    importFrom: [imports],
  }),
  require('postcss-import')({ root: loader.resourcePath }),
  require('cssnano')({
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  }),
  require('postcss-hexrgba')(),
];

export default plugins;
