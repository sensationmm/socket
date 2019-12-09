import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
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
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(appTemplateDecorator);

// @ts-ignore
global.__PATH_PREFIX__ = '';

configure(loadStories, module);
