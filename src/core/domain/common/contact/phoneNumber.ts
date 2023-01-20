import RequiredAttributes from '../../../paramutils/requiredAttributes';
import { InvalidException } from '../../exceptions/invalidException';


export class PhoneNumber {
  private static REGEXP = /^[0-9]{9,14}$/;

  value: string;

  constructor(
    value: string
  ) {
    this.value = RequiredAttributes.requireNonBlank(value);
    PhoneNumber.checkIsPhoneNumber(value);
  }

  private static checkIsPhoneNumber(value: string): void {
    const isEmail = PhoneNumber.REGEXP.test(value);
    if (!isEmail) {
      throw new InvalidException(`Provided value=${value} is not a valid phone number.`);
    }
  }
}
