import MockDate from 'mockdate';

import { findPaymentDate, formatISODate } from './';

describe('date', () => {
  beforeAll(() => {
    MockDate.set('2019-11-07');
  });

  afterAll(() => {
    MockDate.reset();
  });

  describe('formatISODate', () => {
    it('should format an ISO date to the `dd LLL yyyy` format (ex. 09 Oct 2019)', () => {
      const date = '2019-09-07T15:53:00+05:00';
      expect(formatISODate(date)).toEqual('07 Sep 2019');
    });

    it('should allow date format override', () => {
      const date = '2019-09-07T15:53:00+05:00';
      expect(formatISODate(date, 'DD/MM/YY')).toEqual('07/09/19');
      expect(formatISODate(date, 'Do')).toEqual('7th');
    });
  });

  describe('findPaymentDate', () => {
    it('should return the payment plan with the latest fromDt value where the toDt value is either undefined or in the future', () => {
      const payments = [
        {
          fromDt: '2019-09-12',
          frequencyAlignmentDt: '2019-10-26',
        },
        {
          fromDt: '2020-10-17',
          frequencyAlignmentDt: '2019-10-25',
        },
        {
          fromDt: '2019-10-19',
          frequencyAlignmentDt: '2019-10-21',
        },
        {
          fromDt: '2019-10-17',
          toDt: '2020-11-29',
          frequencyAlignmentDt: '2019-10-19',
        },
      ];
      expect(findPaymentDate(payments)).toEqual('2019-10-21');
    });
  });
});
