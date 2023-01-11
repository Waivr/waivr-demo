import { InvalidException } from '../../exceptions/invalidException';

const regExp = /^[.a-zA-Z\s,-]+$/i;

const checkIsPlace = (value: string, attributeName?: string): void => {

  const isValid = regExp.test(value);
  if (!isValid) {

    throw new InvalidException(`Provided value=${value} is not a valid ${attributeName}.`);

  }

};

export default checkIsPlace;
