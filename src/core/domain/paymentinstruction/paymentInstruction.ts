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

export class PaymentInstruction extends IdObject<PaymentInstructionIdentifier> {

    externalReferenceIdentifier: PaymentInstructionExternalReferenceIdentifier;

    customerIdentifier: CustomerIdentifier;

    merchantIdentifier: MerchantIdentifier;

    status: PaymentInstructionStatus;

    amount: PositiveAmount;

    frequency: PaymentFrequency;

    nextBillingDate: FutureDate;

    recurringEndDate: FutureDate | null;

    enableOptimalBillingDate: boolean;

    constructor(
        identifier: PaymentInstructionIdentifier,
        createDate: Date,
        updateDate: Date,
        externalReferenceIdentifier: PaymentInstructionExternalReferenceIdentifier,
        customerIdentifier: CustomerIdentifier,
        merchantIdentifier: MerchantIdentifier,
        status: PaymentInstructionStatus,
        amount: PositiveAmount,
        frequency: PaymentFrequency,
        nextBillingDate: FutureDate,
        recurringEndDate: FutureDate | null,
        enableOptimalBillingDate: boolean
    ) {

        super(identifier, createDate, updateDate);
        this.externalReferenceIdentifier = RequiredAttributes.requireNonNull(externalReferenceIdentifier);
        this.customerIdentifier = RequiredAttributes.requireNonNull(customerIdentifier);
        this.merchantIdentifier = RequiredAttributes.requireNonNull(merchantIdentifier);
        this.status = RequiredAttributes.requireNonNull(status);
        this.amount = RequiredAttributes.requireNonNull(amount);
        this.frequency = RequiredAttributes.requireNonNull(frequency);
        this.nextBillingDate = RequiredAttributes.requireNonNull(nextBillingDate);
        this.recurringEndDate = recurringEndDate;
        this.enableOptimalBillingDate = RequiredAttributes.requireNonNull(enableOptimalBillingDate);

    }

}
