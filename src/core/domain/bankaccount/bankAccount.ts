import { BankAccountType } from './bankAccountType';
import RequiredAttributes from '../../paramutils/requiredAttributes';

export class BankAccount {

    institutionName: string;

    accountNumber: string;

    routingNumber: string;

    accountType: BankAccountType;


    constructor(
        institutionName: string,
        accountNumber: string,
        routingNumber: string,
        accountType: BankAccountType
    ) {

        this.institutionName = RequiredAttributes.requireNonBlankOrNonNullDefault(institutionName, 'UNKNOWN');
        this.accountNumber = RequiredAttributes.requireNonBlank(accountNumber);
        this.routingNumber = RequiredAttributes.requireNonBlank(routingNumber);
        this.accountType = RequiredAttributes.requireNonNull(accountType);
        
    }

}
