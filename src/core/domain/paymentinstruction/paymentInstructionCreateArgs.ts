import { PaymentInstructionExternalReferenceIdentifier } from './paymentInstructionExternalReferenceIdentifier';
import { CustomerIdentifier } from '../customer/customerIdentifier';
import { MerchantIdentifier } from '../merchant/merchantIdentifier';
import { PositiveAmount } from '../common/numbers/positiveAmount';
import { FutureDate } from '../common/date/FutureDate';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import { PaymentFrequency } from './paymentFrequency';

export class PaymentInstructionCreateArgs {
    externalReferenceIdentifier: PaymentInstructionExternalReferenceIdentifier;

    customerIdentifier: CustomerIdentifier;

    merchantIdentifier: MerchantIdentifier;

    amount: PositiveAmount;

    frequency: PaymentFrequency;

    nextBillingDate: FutureDate;

    recurringEndDate: FutureDate | null;

    enableOptimalBillingDate: boolean;

    constructor(
        externalReferenceIdentifier: PaymentInstructionExternalReferenceIdentifier,
        customerIdentifier: CustomerIdentifier,
        merchantIdentifier: MerchantIdentifier,
        amount: PositiveAmount,
        frequency: PaymentFrequency,
        nextBillingDate: FutureDate,
        recurringEndDate?: FutureDate | null | undefined,
        enableOptimalBillingDate?: boolean | undefined
    ) {
        this.externalReferenceIdentifier = RequiredAttributes.requireNonNull(externalReferenceIdentifier);
        this.customerIdentifier = RequiredAttributes.requireNonNull(customerIdentifier);
        this.merchantIdentifier = RequiredAttributes.requireNonNull(merchantIdentifier);
        this.amount = RequiredAttributes.requireNonNull(amount);
        this.frequency = RequiredAttributes.requireNonNull(frequency);
        this.nextBillingDate = RequiredAttributes.requireNonNull(nextBillingDate);
        this.recurringEndDate = recurringEndDate || null;
        this.enableOptimalBillingDate = RequiredAttributes.requireNonNullOrElse(enableOptimalBillingDate, true);
    }
}
