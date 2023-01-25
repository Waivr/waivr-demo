export interface BPaymentFrequency {
  cycle: string;
  recurrence: number;
}

export interface BPaymentInstructionCreateRequest {
  externalReferenceIdentifier: string;
  customerUid: string;
  merchantUid: string;
  amount: number;
  frequency: BPaymentFrequency;
  nextBillingDate: Date;
  recurringEndDate: Date | null;
  enableOptimalBillingDate: boolean | null;
}
