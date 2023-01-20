import RequiredAttributes from '../../paramutils/requiredAttributes';

export class ConnectAccountLinkingAccessToken {
  value: string;

  constructor(value: string) {
    this.value = RequiredAttributes.requireNonBlank(value);
  }
}
