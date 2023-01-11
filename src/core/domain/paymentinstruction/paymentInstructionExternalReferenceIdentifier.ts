import RequiredAttributes from '../../paramutils/requiredAttributes';

export class PaymentInstructionExternalReferenceIdentifier {

  value: string;

  constructor(value: string) {

    this.value = RequiredAttributes.requireNonBlank(value);

  }

}
