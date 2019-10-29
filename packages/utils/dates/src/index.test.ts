import { formatISODate } from './';

describe('date', () => {
  describe('formatISODate', () => {
    it('should format an ISO date to the `dd LLL yyyy` format (ex. 09 Oct 2019)', () => {
      const date = '2019-09-07T15:53:00+05:00';
      expect(formatISODate(date)).toEqual('07 Sep 2019');
    });

    it('should allow date format override', () => {
      const date = '2019-09-07T15:53:00+05:00';
      expect(formatISODate(date, 'DD/MM/YY')).toEqual('07/09/19');
    });
  });
});
