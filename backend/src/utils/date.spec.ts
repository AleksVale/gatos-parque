import DateUtils from './date';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as ptbr from 'dayjs/locale/pt-br';

dayjs.locale(ptbr);
dayjs.extend(utc);

describe('DateUtils', () => {
  describe('getCurrentDate', () => {
    it('should return the current date in UTC', () => {
      const currentDate = DateUtils.getCurrentDate();
      expect(currentDate.isUTC()).toBe(true);
    });
  });

  describe('calculateAge', () => {
    it('should calculate the correct age', () => {
      const birthDate = dayjs.utc().subtract(25, 'years').toISOString();
      const age = DateUtils.calculateAge(birthDate);
      expect(age).toBe(25);
    });
  });

  describe('formatDate', () => {
    it('should format the date correctly', () => {
      const date = dayjs.utc('2023-01-01');
      const formattedDate = DateUtils.formatDate(date, 'YYYY-MM-DD');
      expect(formattedDate).toBe('2023-01-01');
    });
  });

  describe('isBefore', () => {
    it('should return true if the first date is before the second date', () => {
      const date1 = dayjs.utc('2023-01-01');
      const date2 = dayjs.utc('2023-01-02');
      expect(DateUtils.isBefore(date1, date2)).toBe(true);
    });

    it('should return false if the first date is not before the second date', () => {
      const date1 = dayjs.utc('2023-01-02');
      const date2 = dayjs.utc('2023-01-01');
      expect(DateUtils.isBefore(date1, date2)).toBe(false);
    });
  });

  describe('isAfter', () => {
    it('should return true if the first date is after the second date', () => {
      const date1 = dayjs.utc('2023-01-02');
      const date2 = dayjs.utc('2023-01-01');
      expect(DateUtils.isAfter(date1, date2)).toBe(true);
    });

    it('should return false if the first date is not after the second date', () => {
      const date1 = dayjs.utc('2023-01-01');
      const date2 = dayjs.utc('2023-01-02');
      expect(DateUtils.isAfter(date1, date2)).toBe(false);
    });
  });

  describe('isAdult', () => {
    it('should return true if the age is 18 or older', () => {
      const birthDate = dayjs.utc().subtract(18, 'years').toISOString();
      expect(DateUtils.isAdult(birthDate)).toBe(true);
    });

    it('should return false if the age is less than 18', () => {
      const birthDate = dayjs.utc().subtract(17, 'years').toISOString();
      expect(DateUtils.isAdult(birthDate)).toBe(false);
    });
  });
});
