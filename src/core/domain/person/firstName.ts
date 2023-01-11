import checkName from './personNamePattern';
import RequiredAttributes from '../../paramutils/requiredAttributes';

export class FirstName {

  value: string;

  constructor(
    value: string
  ) {

    this.value = RequiredAttributes.requireNonBlank(value);
    checkName(value);

  }

}
