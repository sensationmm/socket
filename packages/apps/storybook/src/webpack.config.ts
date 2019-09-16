import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import postcssPlugins from '@somo/tda-utils-postcss-plugins/src';

export default ({ config: storybookConfig }) => ({
  ...storybookConfig,
  resolve: {
    extensions: ['.ts', '.tsx', '.css', '.js'],
    mainFields: ['browser', 'module', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: [/node_modules\/(?!(gatsby)\/)/],
        loader: 'babel-loader',
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]-[hash:base64:6]',
              },
              sourceMap: true,
              localsConvention: 'camelCase',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: postcssPlugins,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
      },
      {
        test: /\.(png|jpg|gif|webp|webm)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|otf|eot)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    ...storybookConfig.plugins,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
