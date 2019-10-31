import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GlobalWithFetchMock } from 'jest-fetch-mock';

// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { Env, setEnv } from '@somo/pda-utils-env/src';

configure({ adapter: new Adapter() });

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
// tslint:disable-next-line
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

// @ts-ignore
window.matchMedia = () => ({
  addListener: () => null,
  removeListener: () => null,
});

// ADD ENV
const jestWindowEnv = {
  [Env.BrandLong]: 'BRAND_NAME_LONG',
  [Env.BrandShort]: 'BRAND_NAME_SHORT',
  [Env.BuildId]: 'BUILD_ID',
  [Env.SiteUrl]: 'SITE_URL',
  [Env.ApiBaseUrl]: 'API_BASE_URL',
  [Env.AuthorisationHeader]: 'AUTHORISATION_HEADER',
  [Env.GraphqlUrl]: 'GRAPHQL_URL',
};

setEnv(jestWindowEnv);
