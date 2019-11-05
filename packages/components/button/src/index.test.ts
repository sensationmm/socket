import * as Imports from '.';

describe('buttons', () => {
  it('should export a Primary component', () => {
    expect(Imports.Primary).toBeDefined();
  });
  it('should export a Secondary component', () => {
    expect(Imports.Secondary).toBeDefined();
  });
  it('should export a Outline component', () => {
    expect(Imports.Outline).toBeDefined();
  });
});
