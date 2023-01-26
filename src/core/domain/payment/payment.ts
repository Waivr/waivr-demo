import { IdObject } from '../common/idObject';
import { PositiveAmount } from '../common/numbers/positiveAmount';
import { FutureDate } from '../common/date/FutureDate';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import { PaymentIdentifier } from './paymentIdentifier';
import { PaymentStatus } from './paymentStatus';

export class Payment extends IdObject<PaymentIdentifier> {
    status: PaymentStatus;

    amount: PositiveAmount;

    paymentDate: FutureDate;

    constructor(
        identifier: PaymentIdentifier,
        createDate: Date,
        updateDate: Date,
        rawJson: string,
        status: PaymentStatus,
        amount: PositiveAmount,
        paymentDate: FutureDate,
    ) {
        super(identifier, createDate, updateDate, rawJson);
        this.status = RequiredAttributes.requireNonNull(status);
        this.amount = RequiredAttributes.requireNonNull(amount);
        this.paymentDate = RequiredAttributes.requireNonNull(paymentDate);
    }
}
