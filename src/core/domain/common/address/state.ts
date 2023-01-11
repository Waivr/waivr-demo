import RequiredAttributes from '../../../paramutils/requiredAttributes';
import checkIsPlace from './placePattern';

export class State {

  value: string;

  constructor(value: string) {

    this.value = RequiredAttributes.requireNonBlank(value);
    checkIsPlace(value, 'state');

  }

}
