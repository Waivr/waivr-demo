import RequiredAttributes from '../../paramutils/requiredAttributes';

export class ConnectAccountPublicAccessToken {
  value: string;

  constructor(value: string) {
    this.value = RequiredAttributes.requireNonBlank(value);
  }
}
