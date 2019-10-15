import { formatBlogPostISODate } from './';

describe('date', () => {
  describe('formatBlogPostISODate', () => {
    it('should format an ISO date to the `dd LLL yyyy` format (ex. 09 Oct 2019)', () => {
      expect(formatBlogPostISODate('2019-09-07T15:53:00+05:00')).toEqual('07 Sep 2019');
    });
  });
});
