import RequiredAttributes from './requiredAttributes';
import { InvalidException } from '../domain/exceptions/invalidException';

const isEquals = (source: NonNullable<number>, target: NonNullable<number>): boolean => {

  if (RequiredAttributes.isUndefinedOrNull(target)) {

    return RequiredAttributes.isUndefinedOrNull(source);
  
  }

  if (RequiredAttributes.isUndefinedOrNull(source)) {

    return false;
  
  }

  return source === target;

};

const isGreaterThan = (
  source: NonNullable<number>,
  target: NonNullable<number>,
  ): boolean => {

  if (RequiredAttributes.isUndefinedOrNull(target)) {

    return !RequiredAttributes.isUndefinedOrNull(source);

  } if (RequiredAttributes.isUndefinedOrNull(source)) {

    return false;

  }

  return source > target;

};

const isEqualsOrGreaterThan = (source: NonNullable<number>, target: NonNullable<number>) => {

  if (isEquals(source, target)) {

    return true;

  }

  return isGreaterThan(source, target);

};

const isPositive = (value: NonNullable<number>): boolean => isGreaterThan(value, 0);

const isNotPositive = (value: NonNullable<number>): boolean => !isPositive(value);

const isNegative = (value: NonNullable<number>): boolean => isGreaterThan(0, value);

const isNotNegative = (value: NonNullable<number>): boolean => !isNegative(value);

const requireNonNegative = (value: NonNullable<number>): NonNullable<number> => {

  if (isNegative(value)) {

    throw new InvalidException(`Number value=${value} is required not to be Negative.`);

  }

  return value;

};

const requirePositive = (value: NonNullable<number>): NonNullable<number> => {

  if (isNotPositive(value)) {

    throw new InvalidException(`Number value=${value} is required to be Positive.`);

  }

  return value;

};

const requireBetween = (left: NonNullable<number>, value: NonNullable<number>, right: NonNullable<number>): void => {

  RequiredAttributes.requireNonNull(left);
  RequiredAttributes.requireNonNull(value);
  RequiredAttributes.requireNonNull(right);

  const isBetween = left <= value && value <= right;
  if (!isBetween) {

    throw new InvalidException(
      `Number value=${value} is required greater or equals to ${left} and lower or equals to ${right}.`
    );

  }

};

const unMask = (value: string) => Number(value);


const NumberUtils = {
  isEquals,
  isGreaterThan,
  isEqualsOrGreaterThan,
  isPositive,
  isNotPositive,
  isNegative,
  isNotNegative,

  requireNonNegative,
  requirePositive,
  requireBetween,

  unMask,
};

export default NumberUtils;
