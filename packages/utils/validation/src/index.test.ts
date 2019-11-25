import moment from 'moment';
import validation from './';

describe('validation functions', () => {
  describe('validateEmail()', () => {
    test('returns true for a valid email', () => {
      const email = 'hello@getground.co.uk';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBe(true);
    });

    test('returns false if invalid email -> not an email address', () => {
      const email = 'hellogetground';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBe(false);
    });

    test('returns false if invalid email -> no @', () => {
      const email = 'hellogetground.co.uk';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBe(false);
    });

    test('returns false if invalid email -> no domain', () => {
      const email = 'hello@getground';
      const isValid = validation.validateEmail(email);
      expect(isValid).toBe(false);
    });
  });

  describe('validateRequired()', () => {
    test('returns true if input is entered', () => {
      const input = 'some text';
      const isValid = validation.validateRequired(input);
      expect(isValid).toBe(true);
    });

    test('returns false if empty string', () => {
      const input = '';
      const isValid = validation.validateRequired(input);
      expect(isValid).toBe(false);
    });

    test('returns false if null value', () => {
      const input = null;
      const isValid = validation.validateRequired(input);
      expect(isValid).toBe(false);
    });

    test('returns false if undefined', () => {
      const input = undefined;
      const isValid = validation.validateRequired(input);
      expect(isValid).toBe(false);
    });

    test('returns false if empty array', () => {
      const input = [];
      const isValid = validation.validateRequired(input);
      expect(isValid).toBe(false);
    });
  });

  describe('validMatching()', () => {
    test('returns true for matching string', () => {
      const string1 = 'something';
      const string2 = 'something';
      const isValid = validation.validateMatching(string1, string2);
      expect(isValid).toBe(true);
    });

    test('returns false for non-matching string', () => {
      const string1 = 'something';
      const string2 = 'somethingelse';
      const isValid = validation.validateMatching(string1, string2);
      expect(isValid).toBe(false);
    });
  });

  describe('validateNotDuplicate()', () => {
    test('returns true if not existing', () => {
      const string1 = 'something';
      const string2 = ['somethingelse', 'somethingmore'];
      const isValid = validation.validateNotDuplicate(string1, string2);
      expect(isValid).toBe(true);
    });

    test('returns false if existing', () => {
      const string1 = 'something';
      const string2 = ['something', 'somethingelse', 'somethingmore'];
      const isValid = validation.validateNotDuplicate(string1, string2);
      expect(isValid).toBe(false);
    });
  });

  describe('validateLettersOnly()', () => {
    test('returns true if string contains only letters', () => {
      const check = 'something';
      const isValid = validation.validateLettersOnly(check);

      expect(isValid).toBe(true);
    });

    test('returns false if string contains numbers', () => {
      const check = 'something123';
      const isValid = validation.validateLettersOnly(check);
      expect(isValid).toBe(false);
    });

    test('allows spaces', () => {
      const check = 'something else';
      const isValid = validation.validateLettersOnly(check);

      expect(isValid).toBe(true);
    });
  });

  describe('validatePhone()', () => {
    test('returns true for numeric string with phone number chars', () => {
      const check = '+44(0)1234567';
      const isValid = validation.validatePhone(check);
      expect(isValid).toBe(true);
    });

    test('returns false for non-numeric string', () => {
      const check = '+44(0)123456asd';
      const isValid = validation.validatePhone(check);
      expect(isValid).toBe(false);
    });

    test('returns true if value is an empty string', () => {
      const check = '';
      const isValid = validation.validatePhone(check);
      expect(isValid).toBe(true);
    });

    test('returns false if value is less than 5', () => {
      const check = '+44(0)1234';
      const isValid = validation.validatePhone(check);
      expect(isValid).toBe(false);
    });

    test('returns false if value is larger than 15', () => {
      const check = '1234567890123456';
      const isValid = validation.validatePhone(check);
      expect(isValid).toBe(false);
    });

    test('special chars not allowed later in number', () => {
      const check = '4567(8)90+999';
      const isValid = validation.validatePhone(check);
      expect(isValid).toBe(false);
    });
  });

  describe('validateTotal', () => {
    test('returns true if less', () => {
      const check = 21;
      const isValid = validation.validateTotal(check, { total: 21, maxValue: 30 });
      expect(isValid).toBe(true);
    });

    test('returns true if equal', () => {
      const check = 21;
      const isValid = validation.validateTotal(check, { total: 30, maxValue: 30 });
      expect(isValid).toBe(true);
    });

    test('returns false if more', () => {
      const check = 21;
      const isValid = validation.validateTotal(check, { total: 31, maxValue: 30 });
      expect(isValid).toBe(false);
    });
  });

  describe('validateNumeric', () => {
    test('returns true for numbers', () => {
      const isValid = validation.validateNumeric('21');
      expect(isValid).toBe(true);
    });

    test('returns false for strings', () => {
      const isValid = validation.validateNumeric('abc');
      expect(isValid).toBe(false);
    });

    test('returns false if empty', () => {
      const isValid = validation.validateNumeric('');
      expect(isValid).toBe(false);
    });
  });

  describe('validateMinimum', () => {
    test('returns true if more', () => {
      const isValid = validation.validateMinimum('password1', 6);
      expect(isValid).toBe(true);
    });

    test('returns true if equal', () => {
      const isValid = validation.validateMinimum('passwo', 6);
      expect(isValid).toBe(true);
    });

    test('returns false if less', () => {
      const isValid = validation.validateMinimum('pass', 6);
      expect(isValid).toBe(false);
    });
  });

  describe('validateMinValue', () => {
    test('returns true if more', () => {
      const isValid = validation.validateMinValue(4, 3);
      expect(isValid).toBe(true);
    });

    test('returns true if equal', () => {
      const isValid = validation.validateMinValue(4, 4);
      expect(isValid).toBe(true);
    });

    test('returns false if less', () => {
      const isValid = validation.validateMinValue(4, 6);
      expect(isValid).toBe(false);
    });
  });

  describe('validateMinDate', () => {
    test('returns true if more', () => {
      const isValid = validation.validateMinDate('04/01/2020', '01/01/2020');
      expect(isValid).toBe(true);
    });

    test('returns true if equal', () => {
      const isValid = validation.validateMinDate('01/01/2020', '01/01/2020');
      expect(isValid).toBe(true);
    });

    test('returns false if less', () => {
      const isValid = validation.validateMinDate('31/12/2019', '01/01/2020');
      expect(isValid).toBe(false);
    });
  });

  describe('validateNoSpaces', () => {
    test('returns true if no spaces', () => {
      const isValid = validation.validateNoSpaces('password1');
      expect(isValid).toBe(true);
    });

    test('returns false if spaces', () => {
      const isValid = validation.validateNoSpaces('passw ord1');
      expect(isValid).toBe(false);
    });
  });

  describe('validateDate', () => {
    test('returns true for valid format', () => {
      const isValid = validation.validateDate('01/01/2020');
      expect(isValid).toBe(true);
    });

    test('returns false for non valid format', () => {
      const isValid = validation.validateDate('01-01-2020');
      expect(isValid).toBe(false);
    });

    test('returns false for US order', () => {
      const isValid = validation.validateDate('01/20/2020');
      expect(isValid).toBe(false);
    });

    test('returns false if char', () => {
      const isValid = validation.validateDate('0a/20/2020');
      expect(isValid).toBe(false);
    });
  });

  describe('validateFutureDate', () => {
    test('returns true if date is in future', () => {
      const isValid = validation.validateFutureDate('01/01/2020');
      expect(isValid).toBe(true);
    });

    test('returns false if date is in past', () => {
      const isValid = validation.validateFutureDate('01/01/2017');
      expect(isValid).toBe(false);
    });

    test('returns false if date is today', () => {
      const isValid = validation.validateFutureDate(moment().format('DD/MM/YYYY'));
      expect(isValid).toBe(false);
    });
  });

  describe('validateNoSpecial', () => {
    test('returns true if no special characters', () => {
      const isValid = validation.validateNoSpecial('asdf1234, -.');
      expect(isValid).toBe(true);
    });

    test('returns false if special characters found', () => {
      const isValid = validation.validateNoSpecial('asdf1234, @');
      expect(isValid).toBe(false);
    });
  });

  describe('validatePostcode()', () => {
    test('returns true for a valid postcode', () => {
      expect(validation.validatePostcode('NW1 8XL')).toBe(true);
      expect(validation.validatePostcode('SE50EG')).toBe(true);
      expect(validation.validatePostcode('WC2H 7LT')).toBe(true);
      expect(validation.validatePostcode('CW3 9SS')).toBe(true);
    });

    test('returns false if invalid postcode', () => {
      expect(validation.validatePostcode('aWC2H 7LT')).toEqual(false);
      expect(validation.validatePostcode('WC2H 7LTa')).toEqual(false);
      expect(validation.validatePostcode('WC2H')).toEqual(false);
    });
  });
});
