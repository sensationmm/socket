import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GlobalWithFetchMock } from 'jest-fetch-mock';

import '@testing-library/jest-dom/extend-expect';

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
