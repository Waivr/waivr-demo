import RequiredAttributes from '../../paramutils/requiredAttributes';


export class ConnectAccountInstitutionCreateArgs {
    accountIdentifier: string;

    constructor(
        accountIdentifier: string,
    ) {
        this.accountIdentifier = RequiredAttributes.requireNonBlank(accountIdentifier);
    }
}
