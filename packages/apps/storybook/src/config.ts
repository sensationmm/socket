import centered from '@storybook/addon-centered/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';

import appTemplateDecorator from './decorators/app-template';

const req = require.context('../../../../packages', true, /^((?![\\/]node_modules[\\/]).)*\.stories\.(tsx|ts)$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

addParameters({
  options: {
    sortStoriesByKind: true,
    theme: create({
      base: 'light',
      brandTitle: 'Somo Global',
    }),
  },
  viewports: {
    ...INITIAL_VIEWPORTS,
  },
  a11y: {},
});

addDecorator(centered);
addDecorator(appTemplateDecorator);

// // the following is required to get gatsby to play nice with storybook
// // @link https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
// // tslint:disable
// // @ts-ignore
// global.___loader = {
//   enqueue: () => {},
//   hovering: () => {},
// };
// // @ts-ignore
// global.__PATH_PREFIX__ = '';
// // @ts-ignore
// window.___navigate = (pathname) => {
//   action('NavigateTo:')(pathname);
// };

configure(loadStories, module);
