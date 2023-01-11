import { DecimalScalePrecision } from '../domain/common/numbers/decimalScalePrecision';
import { DecimalRoundingMode } from '../domain/common/numbers/decimalRoundingMode';
import RequiredAttributes from './requiredAttributes';

const padRightZeros = (num: number, size: number): number => {

  let numAsString = `${num}`;
  while (numAsString.length < size) {

    numAsString += '0';

  }

  return Number(numAsString);

};

/**
 * Must redo this method to take into consideration rounding mode and better scale precision.
 *
 * Consider moving to a better library than Math.
 *
 * @param num
 * @param scalePrecision
 * @param roundingMode
 */
const round = (
  num: number,
  scalePrecision: DecimalScalePrecision,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  roundingMode: DecimalRoundingMode
): number => {

  RequiredAttributes.requireNonNull(num);
  RequiredAttributes.requireNonNull(scalePrecision);
  RequiredAttributes.requireNonNull(roundingMode);

  const roundPrecision = padRightZeros(1, (scalePrecision.value + 1));

  return Math.round((num + Number.EPSILON) * roundPrecision) / roundPrecision;

};


const DecimalUtils = {
  round
};

export default DecimalUtils;
