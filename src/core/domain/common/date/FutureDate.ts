import DateUtils from '../../../paramutils/dateUtils';
import RequiredAttributes from '../../../paramutils/requiredAttributes';

export class FutureDate {
  baseDate: Date;

  value: Date;

  constructor(baseDate: Date, value: Date) {
    this.baseDate = RequiredAttributes.requireNonNull(baseDate);
    this.value = RequiredAttributes.requireNonNull(value);
    DateUtils.requireAfterDate(baseDate, value);
  }

  public static basedOfNow(value: Date): FutureDate {
    return new FutureDate(new Date(), value);
  }
}
