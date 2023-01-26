import RequiredAttributes from '../../paramutils/requiredAttributes';
import { PaymentInstructionIdentifier } from '../paymentinstruction/paymentInstructionIdentifier';
import { PaymentMethodType } from './paymentMethodType';

export class PaymentCreateArgs {
    paymentInstructionIdentifier: PaymentInstructionIdentifier;

    methodType: PaymentMethodType;

    constructor(
        paymentInstructionIdentifier: PaymentInstructionIdentifier,
        methodType: PaymentMethodType,
    ) {
        this.paymentInstructionIdentifier = RequiredAttributes.requireNonNull(paymentInstructionIdentifier);
        this.methodType = RequiredAttributes.requireNonNull(methodType);
    }
}
