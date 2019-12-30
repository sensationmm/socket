import { isLocal, isProduction } from './environment';

describe(`isProduction`, () => {
  it(`should return true when the provided URL contains "socketenergy.co.uk"`, () => {
    expect(isProduction('https://www.socketenergy.co.uk')).toBeTruthy();
    expect(isProduction('https://socketenergy.co.uk/')).toBeTruthy();
    expect(isProduction('https://community.socketenergy.co.uk')).toBeTruthy();
    expect(isProduction('https://socketenergy.co.uk/login')).toBeTruthy();
    expect(isProduction('https://socketenergy.co.uk?parameter=true')).toBeTruthy();
  });

  it(`should return false when the provided UTL doesn't contain "socketenergy.co.uk"`, () => {
    expect(isProduction('https://www.test.com')).toBeFalsy();
    expect(isProduction('something')).toBeFalsy();
    expect(isProduction('socketenergy')).toBeFalsy();
    expect(isProduction('socket.energy')).toBeFalsy();
    expect(isProduction('socketenergy.com')).toBeFalsy();
  });
});

describe(`isLocal`, () => {
  it(`should return true when the provided URL is "https://localhost:8000"`, () => {
    expect(isLocal('https://localhost:8000')).toBeTruthy();
  });

  it(`should return false when the provided UTL isn't "https://localhost:8000"`, () => {
    expect(isLocal('https://localhost')).toBeFalsy();
    expect(isLocal('https://www.example.com')).toBeFalsy();
    expect(isLocal('localhost')).toBeFalsy();
  });
});
