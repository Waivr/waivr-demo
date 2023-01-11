import RequiredAttributes from '../../../paramutils/requiredAttributes';
import checkIsLine from './linePattern';

export class Line2 {

  value: string;

  constructor(value: string) {

    this.value = RequiredAttributes.requireNonBlank(value);
    checkIsLine(value, 'line2');

  }

}
