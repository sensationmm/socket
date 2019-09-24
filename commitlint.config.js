const { getPackages } = require('@commitlint/config-lerna-scopes').utils;

const customScopes = ['repo', 'deps', 'storybook', 'jest'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#', 'PDA-', 'PODD-'],
    },
  },
  rules: {
    'scope-empty': [2, 'never'],
    'scope-enum': (ctx) =>
      getPackages(ctx).then((packages) => {
        const pkgs = packages.map((name) => name.replace(/^pda-([a-z0-9]*)-([a-z0-9-]*)$/gi, '$2')).sort();
        return [2, 'always', [...customScopes, ...pkgs, 'azp']];
      }),
    'references-empty': [2, 'never'],
    'header-max-length': [0, 'never', 200],
  },
};
