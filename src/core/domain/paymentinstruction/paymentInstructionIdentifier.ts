import RequiredAttributes from '../../paramutils/requiredAttributes';

export class PaymentInstructionIdentifier {

  value: string;

  constructor(value: string) {

    this.value = RequiredAttributes.requireNonBlank(value);

  }

}
