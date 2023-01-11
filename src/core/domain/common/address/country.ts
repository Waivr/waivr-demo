import RequiredAttributes from '../../../paramutils/requiredAttributes';
import checkIsPlace from './placePattern';

export class Country {

  value: string;

  constructor(value: string) {

    this.value = RequiredAttributes.requireNonBlank(value);
    checkIsPlace(value, 'country');

  }

}
