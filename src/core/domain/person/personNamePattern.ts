import { InvalidException } from '../exceptions/invalidException';

const REGEXP = /^[a-z ,.'-]+$/i;

const checkName = (value: string): void => {

  const isEmail = REGEXP.test(value);
  if (!isEmail) {

    throw new InvalidException(`Provided value=${value} is not a valid person name.`);

  }

};

export default checkName;
