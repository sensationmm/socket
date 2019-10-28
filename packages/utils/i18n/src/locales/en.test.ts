import data from './en';

describe('tokens', () => {
  it('should export an object of data translations', () => {
    expect(data).toEqual(expect.any(Object));
  });
});
