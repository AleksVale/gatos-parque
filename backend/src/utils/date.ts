import * as dayjs from 'dayjs';
import * as ptbr from 'dayjs/locale/pt-br';
import * as utc from 'dayjs/plugin/utc';

dayjs.locale(ptbr);
dayjs.extend(utc);

export default class DateUtils {
  static getCurrentDate() {
    return dayjs.utc().utc();
  }

  static calculateAge(birthDate: string | Date | dayjs.Dayjs): number {
    const today = DateUtils.getCurrentDate();
    const birth = dayjs.utc(birthDate);
    return today.diff(birth, 'year');
  }

  static formatDate(date: string | Date | dayjs.Dayjs, format: string): string {
    return dayjs.utc(date).format(format);
  }

  static isBefore(
    date: string | Date | dayjs.Dayjs,
    comparedDate: string | Date | dayjs.Dayjs,
  ): boolean {
    return dayjs.utc(date).isBefore(dayjs.utc(comparedDate));
  }

  static isAfter(
    date: string | Date | dayjs.Dayjs,
    comparedDate: string | Date | dayjs.Dayjs,
  ): boolean {
    return dayjs.utc(date).isAfter(dayjs.utc(comparedDate));
  }

  static isAdult(birthDate: string | Date | dayjs.Dayjs): boolean {
    const today = DateUtils.getCurrentDate();
    const age = today.diff(dayjs.utc(birthDate), 'year');
    return age >= 18;
  }
}
