import RequiredAttributes from '../../../paramutils/requiredAttributes';
import { InvalidException } from '../../exceptions/invalidException';


export class ZipCode {

  private static REGEXP = /^([0-9a-zA-Z\s-]{5,15})+$/i;

  value: string;

  constructor(
    value: string
  ) {

    this.value = RequiredAttributes.requireNonBlank(value);
    ZipCode.checkIsZipCode(value);

  }

  private static checkIsZipCode(value: string): void {

    const isValidZipCode = ZipCode.REGEXP.test(value);
    if (!isValidZipCode) {

      throw new InvalidException(`Provided value=${value} is not a valid zipcode.`);

    }

  }

}
