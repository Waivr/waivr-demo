import { PaymentFrequencyCycle } from './paymentFrequencyCycle';
import { PositiveAmount } from '../common/numbers/positiveAmount';
import RequiredAttributes from '../../paramutils/requiredAttributes';

export class PaymentFrequency {

    cycle: PaymentFrequencyCycle;

    recurrence: PositiveAmount;


    constructor(cycle: PaymentFrequencyCycle, recurrence: PositiveAmount) {

        this.cycle = RequiredAttributes.requireNonNull(cycle);
        this.recurrence = RequiredAttributes.requireNonNull(recurrence);
    
    }

}
