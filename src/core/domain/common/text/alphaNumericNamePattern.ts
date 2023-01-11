import { InvalidException } from '../../exceptions/invalidException';
import StringUtils from '../../../paramutils/stringUtils';

const regExp = /^[\w ,.'-\\&]+$/i;

const checkIsAlphaNumericName = (value: string, attributeName?: string): void => {

  const isValid = regExp.test(value) && StringUtils.isStringWithoutSpaceBefore(value);
  if (!isValid) {

    throw new InvalidException(`Provided value=${value} is not a valid ${attributeName}.`);

  }

};

export default checkIsAlphaNumericName;
