import NumberUtils from '../../../paramutils/numberUtils';
import RequiredAttributes from '../../../paramutils/requiredAttributes';
import { Amount } from './amount';

/**
 * Positive Amount means that a number must be always positive.
 */
export class PositiveAmount implements Amount {
  value: number;

  constructor(
    value: NonNullable<number>,
    ) {
    this.value = NumberUtils.requirePositive(value);
  }

  public isEqualsOrGreaterThan(amount: PositiveAmount): boolean {
    RequiredAttributes.requireNonNull(amount);
    return NumberUtils.isEqualsOrGreaterThan(this.value, amount.value);
  }
}
