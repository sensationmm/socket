import * as pkg from '.';

describe('tokens package', () => {
  it('should export a toJSON method', () => {
    expect(pkg.toJSON).toBeDefined();
    expect(typeof pkg.toJSON).toBe('function');
  });
  it('should export a default object', () => {
    expect(pkg.default).toBeDefined();
    expect(typeof pkg.default).toBe('object');
  });
});
