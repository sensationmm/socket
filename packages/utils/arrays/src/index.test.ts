import { splitArrayIntoChunksOfN } from './';

describe('arrays', () => {
  describe('splitArrayIntoChunksOfN', () => {
    it('should split an array into an array of chunks containing N items', () => {
      expect(splitArrayIntoChunksOfN([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(splitArrayIntoChunksOfN([1, 2, 3, 4, 5], 3)).toEqual([
        [1, 2, 3],
        [4, 5],
      ]);
      expect(splitArrayIntoChunksOfN([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9]]);
      expect(splitArrayIntoChunksOfN([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, true)).toEqual([
        [1, 2, 3, 4],
        [5, 6, 7, 8, 9],
      ]);
    });
  });
});
