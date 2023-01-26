import RequiredAttributes from '../../paramutils/requiredAttributes';

export class PaymentIdentifier {
  value: string;

  constructor(value: string) {
    this.value = RequiredAttributes.requireNonBlank(value);
  }
}
