import * as pkg from '.';

// here we mock the plugins to just return their name
jest.mock('stylelint', () => () => 'stylelint');
jest.mock('postcss-reporter', () => () => 'postcss-reporter');
jest.mock('postcss-browser-reporter', () => () => 'postcss-browser-reporter');
jest.mock('postcss-nested', () => 'postcss-nested');
jest.mock('postcss-preset-env', () => () => 'postcss-preset-env');
jest.mock('postcss-import', () => () => 'postcss-import');
jest.mock('cssnano', () => () => 'cssnano');

describe('postcss-plugins package', () => {
  it('should export a method that returns an array of post css plugins', () => {
    expect(pkg.default({ resourcePath: 'foo' } as any)).toEqual([
      'stylelint',
      'postcss-reporter',
      'postcss-browser-reporter',
      'postcss-nested',
      'postcss-preset-env',
      'postcss-import',
      'cssnano',
    ]);
  });
});
