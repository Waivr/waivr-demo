import { IdObject } from '../common/idObject';
import { BusinessIdentification } from './businessIdentification';
import { BankAccount } from '../bankaccount/bankAccount';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import { MerchantIdentifier } from './merchantIdentifier';


export class Merchant extends IdObject<MerchantIdentifier> {

    identification: BusinessIdentification;

    bankInstitutions: BankAccount[];

    constructor(
        identifier: MerchantIdentifier,
        createDate: Date,
        updateDate: Date,
        identification: BusinessIdentification,
        bankInstitutions: BankAccount[]
    ) {

        super(identifier, createDate, updateDate);
        this.identification = RequiredAttributes.requireNonNull(identification);
        this.bankInstitutions = RequiredAttributes.requireNonEmptyNorNullElementsArray(bankInstitutions);
        
    }

}
