import { PaymentInstructionIdentifier } from './paymentInstructionIdentifier';
import { IdObject } from '../common/idObject';
import { PaymentInstructionExternalReferenceIdentifier } from './paymentInstructionExternalReferenceIdentifier';
import { CustomerIdentifier } from '../customer/customerIdentifier';
import { MerchantIdentifier } from '../merchant/merchantIdentifier';
import { PaymentInstructionStatus } from './paymentInstructionStatus';
import { PositiveAmount } from '../common/numbers/positiveAmount';
import { FutureDate } from '../common/date/FutureDate';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import { PaymentFrequency } from './paymentFrequency';
import { PaymentInstructionBankAccountSummary } from './paymentInstructionBankAccountSummary';

export class PaymentInstructionSummary {
    identifier: PaymentInstructionIdentifier;

    externalReferenceIdentifier: PaymentInstructionExternalReferenceIdentifier;

    customerIdentifier: CustomerIdentifier;

    merchantIdentifier: MerchantIdentifier;

    status: PaymentInstructionStatus;

    amount: PositiveAmount;

    frequency: PaymentFrequency;

    nextBillingDate: FutureDate;

    recurringEndDate: FutureDate | null;

    bankAccount: PaymentInstructionBankAccountSummary;

    rawJson: string;

    constructor(
        identifier: PaymentInstructionIdentifier,
        externalReferenceIdentifier: PaymentInstructionExternalReferenceIdentifier,
        customerIdentifier: CustomerIdentifier,
        merchantIdentifier: MerchantIdentifier,
        status: PaymentInstructionStatus,
        amount: PositiveAmount,
        frequency: PaymentFrequency,
        nextBillingDate: FutureDate,
        recurringEndDate: FutureDate | null,
        bankAccount: PaymentInstructionBankAccountSummary,
        rawJson: string
    ) {
        this.identifier = RequiredAttributes.requireNonNull(identifier);
        this.externalReferenceIdentifier = RequiredAttributes.requireNonNull(externalReferenceIdentifier);
        this.customerIdentifier = RequiredAttributes.requireNonNull(customerIdentifier);
        this.merchantIdentifier = RequiredAttributes.requireNonNull(merchantIdentifier);
        this.status = RequiredAttributes.requireNonNull(status);
        this.amount = RequiredAttributes.requireNonNull(amount);
        this.frequency = RequiredAttributes.requireNonNull(frequency);
        this.nextBillingDate = RequiredAttributes.requireNonNull(nextBillingDate);
        this.recurringEndDate = recurringEndDate;
        this.bankAccount = RequiredAttributes.requireNonNull(bankAccount);
        this.rawJson = RequiredAttributes.requireNonBlank(rawJson);
    }
}
