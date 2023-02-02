import RequiredAttributes from '../../paramutils/requiredAttributes';
import { OptimalBillingDateAnalysis } from './optimalBillingDateAnalysis';

export class PaymentInstructionMetadata {
  optimalBillingDateAnalysis: OptimalBillingDateAnalysis;

  constructor(optimalBillingDateAnalysis: OptimalBillingDateAnalysis) {
    this.optimalBillingDateAnalysis = RequiredAttributes.requireNonNull(optimalBillingDateAnalysis);
  }
}
