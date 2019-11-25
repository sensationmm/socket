import { camelize, computeAddress } from '.';

describe('strings', () => {
  describe('camelize', () => {
    it('should convert string into a camelized string', () => {
      expect(camelize('camelize this string')).toEqual('camelizeThisString');
    });

    it('should convert string into a camelized string and remove special chars', () => {
      expect(camelize('camelize this string (here)')).toEqual('camelizeThisStringHere');
    });
  });

  describe('computeAddress', () => {
    it('should concatenate all the address fields', () => {
      expect(
        computeAddress({
          address1: '123 Regents Park Road',
          address2: 'Flat 3',
          address3: '2nd floor',
          postcode: 'NW1 8XL',
        }),
      ).toEqual('123 Regents Park Road, Flat 3, 2nd floor, NW1 8XL');
    });
  });
});
