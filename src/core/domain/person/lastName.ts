import RequiredAttributes from '../../paramutils/requiredAttributes';
import checkName from './personNamePattern';

export class LastName {

  value: string;

  constructor(
    value: string
  ) {

    this.value = RequiredAttributes.requireNonBlank(value);
    checkName(value);

  }

}
