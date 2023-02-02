import RequiredAttributes from '../../paramutils/requiredAttributes';

export class OptimalBillingDateAnalysis {
  basedNextBillingDate: Date;

  optimalBillingDates: Date[];

  constructor(
      basedNextBillingDate: Date,
      optimalBillingDates: Date[]
  ) {
    this.basedNextBillingDate = RequiredAttributes.requireNonNull(basedNextBillingDate);
    this.optimalBillingDates = RequiredAttributes.requireNonNullElementsArray(optimalBillingDates);
  }
}
