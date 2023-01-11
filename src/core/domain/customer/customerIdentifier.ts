import RequiredAttributes from '../../paramutils/requiredAttributes';

export class CustomerIdentifier {

  value: string;

  constructor(value: string) {

    this.value = RequiredAttributes.requireNonBlank(value);

  }

}
