import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GlobalWithFetchMock } from 'jest-fetch-mock';

// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

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
// const jestWindowEnv = {

// };

// setEnv(jestWindowEnv);
