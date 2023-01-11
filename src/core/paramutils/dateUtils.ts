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

const DateUtils = {
  isFutureDate,
  isAfterDate,

  requireFutureDate,
  requireAfterDate,
};

export default DateUtils;
