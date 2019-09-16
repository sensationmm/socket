import tokens from './tokens';

describe('tokens', () => {
  it('should export an object in the format for postcss importFrom', () => {
    expect(tokens).toEqual(
      expect.objectContaining({
        customProperties: {
          breakpoint: expect.any(Object),
          color: expect.any(Object),
          spacing: expect.any(Object),
          font: {
            size: expect.any(Object),
            weight: expect.any(Object),
          },
        },
        customMedia: expect.any(Object),
        environmentVariables: expect.any(Object),
        customSelectors: expect.any(Object),
      }),
    );
  });
});
