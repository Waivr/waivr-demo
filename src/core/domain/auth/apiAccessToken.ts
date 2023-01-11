import RequiredAttributes from '../../paramutils/requiredAttributes';

export class ApiAccessToken {

  key: string;

  secret: string;


  constructor(
    key: string,
    secret: string,
    ) {

    this.key = RequiredAttributes.requireNonBlank(key);
    this.secret = RequiredAttributes.requireNonBlank(secret);

  }

}
