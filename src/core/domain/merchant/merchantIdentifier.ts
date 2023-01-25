import RequiredAttributes from '../../paramutils/requiredAttributes';

export class MerchantIdentifier {
  value: string;

  constructor(value: string) {
    this.value = RequiredAttributes.requireNonBlank(value);
  }
}
