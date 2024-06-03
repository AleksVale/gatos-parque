import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
export default class DateUtils {
    static getCurrentDate(): dayjs.Dayjs;
    static calculateAge(birthDate: string | Date | dayjs.Dayjs): number;
    static formatDate(date: string | Date | dayjs.Dayjs, format: string): string;
    static isBefore(date: string | Date | dayjs.Dayjs, comparedDate: string | Date | dayjs.Dayjs): boolean;
    static isAfter(date: string | Date | dayjs.Dayjs, comparedDate: string | Date | dayjs.Dayjs): boolean;
    static isAdult(birthDate: string | Date | dayjs.Dayjs): boolean;
}
