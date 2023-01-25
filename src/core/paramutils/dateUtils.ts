import RequiredAttributes from './requiredAttributes';
import { RequiredException } from '../domain/exceptions/requiredException';

const isAfterDate = (source: NonNullable<Date>, target: NonNullable<Date>): boolean => {
  RequiredAttributes.requireNonNull(source, 'source date');
  RequiredAttributes.requireNonNull(target, 'target date');
  return source.getTime() > target.getTime();
};

const isFutureDate = (date: NonNullable<Date>): boolean => {
  const now = new Date();
  return isAfterDate(date, now);
};

const requireFutureDate = (date: NonNullable<Date>): NonNullable<Date> => {
  if (!isFutureDate(date)) {
    throw new RequiredException(`Date=${date} is not after now().`);
  }

  return date;
};

const requireAfterDate = (source: NonNullable<Date>, target: NonNullable<Date>): NonNullable<Date> => {
  if (!isAfterDate(source, target)) {
    throw new RequiredException(`Source=${source} is not after target=${target}.`);
  }

  return source;
};

export enum TimeUnit {
  DAY = 'DAY',
  MINUTE = 'MINUTE',
}

const addTimeUnit = (source: Date, timeUnit: TimeUnit, addAmount: number): Date => {
  const newDate = new Date(source);

  if (TimeUnit.DAY === timeUnit) {
    newDate.setDate(source.getDate() + addAmount);
    return newDate;
  }

  if (TimeUnit.MINUTE === timeUnit) {
    newDate.setMinutes(source.getMinutes() + addAmount);
    return newDate;
  }

  throw new Error(`Unsupported source=${source} to addAmount=${addAmount} for timeUnit=${timeUnit}`);
};

const DateUtils = {
  isFutureDate,
  isAfterDate,

  addTimeUnit,

  requireFutureDate,
  requireAfterDate,
};

export default DateUtils;
