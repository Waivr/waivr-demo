import RequiredAttributes from '../../../paramutils/requiredAttributes';
import checkIsPlace from './placePattern';

export class City {

  value: string;

  constructor(value: string) {

    this.value = RequiredAttributes.requireNonBlank(value);
    checkIsPlace(value, 'city');

  }

}
