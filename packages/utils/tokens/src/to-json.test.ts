import toJSON from './to-json';

describe('tokens toJSON()', () => {
  it('should return a flattened object with the correct prefixes for each type', () => {
    const nestedToken = {
      a: {
        b: {
          c: 'foo',
        },
      },
    };

    const input = {
      customMedia: nestedToken,
      customProperties: nestedToken,
      customSelectors: nestedToken,
      environmentVariables: nestedToken,
    };

    expect(toJSON(input)).toEqual(
      expect.objectContaining({
        customMedia: {
          '--a-b-c': 'foo',
        },
        customProperties: {
          '--a-b-c': 'foo',
        },
        customSelectors: {
          ':--a-b-c': 'foo',
        },
        environmentVariables: {
          '--a-b-c': 'foo',
        },
      }),
    );
  });
});
