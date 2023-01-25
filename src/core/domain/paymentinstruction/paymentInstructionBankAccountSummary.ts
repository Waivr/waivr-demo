import RequiredAttributes from '../../paramutils/requiredAttributes';

export class PaymentInstructionBankAccountSummary {
    institutionName: string;

    maskedAccountNumber: string;

    maskedRoutingNumber: string;

    constructor(
        institutionName: string,
        maskedAccountNumber: string,
        maskedRoutingNumber: string,
    ) {
        this.institutionName = RequiredAttributes.requireNonBlank(institutionName);
        this.maskedAccountNumber = RequiredAttributes.requireNonBlank(maskedAccountNumber);
        this.maskedRoutingNumber = RequiredAttributes.requireNonBlank(maskedRoutingNumber);
    }
}
