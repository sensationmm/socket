import { camelize } from '.';

describe('strings', () => {
  describe('camelize', () => {
    it('should convert string into a camelized string', () => {
      expect(camelize('camelize this string')).toEqual('camelizeThisString');
    });

    it('should convert string into a camelized string and remove special chars', () => {
      expect(camelize('camelize this string (here)')).toEqual('camelizeThisStringHere');
    });
  });
});
