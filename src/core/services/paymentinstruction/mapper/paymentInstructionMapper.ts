import { BPaymentFrequency, BPaymentInstructionCreateRequest } from '../entities/entityTypes';
import { MappingException } from '../../../domain/exceptions/mappingException';
import { CustomerIdentifier } from '../../../domain/customer/customerIdentifier';
import RequiredAttributes from '../../../paramutils/requiredAttributes';
import { PaymentInstructionCreateArgs } from '../../../domain/paymentinstruction/paymentInstructionCreateArgs';
import { PaymentInstruction } from '../../../domain/paymentinstruction/paymentInstruction';
import { PaymentInstructionIdentifier } from '../../../domain/paymentinstruction/paymentInstructionIdentifier';
import {
  PaymentInstructionExternalReferenceIdentifier
} from '../../../domain/paymentinstruction/paymentInstructionExternalReferenceIdentifier';
import { MerchantIdentifier } from '../../../domain/merchant/merchantIdentifier';
import { PaymentInstructionStatus } from '../../../domain/paymentinstruction/paymentInstructionStatus';
import { PositiveAmount } from '../../../domain/common/numbers/positiveAmount';
import { PaymentFrequency } from '../../../domain/paymentinstruction/paymentFrequency';
import { PaymentFrequencyCycle } from '../../../domain/paymentinstruction/paymentFrequencyCycle';
import { FutureDate } from '../../../domain/common/date/FutureDate';
import DateUtils, { TimeUnit } from '../../../paramutils/dateUtils';
import { PaymentInstructionSummary } from '../../../domain/paymentinstruction/paymentInstructionSummary';
import {
  PaymentInstructionBankAccountSummary
} from '../../../domain/paymentinstruction/paymentInstructionBankAccountSummary';

const mapPaymentFrequency = (frequency: any): PaymentFrequency => {
  const cycle:PaymentFrequencyCycle = PaymentFrequencyCycle[
      frequency.cycle as keyof typeof PaymentFrequencyCycle
      ];
  const amount = new PositiveAmount(frequency.recurrence);
  return new PaymentFrequency(
      cycle,
      amount
  );
};

const mapPaymentInstruction = (paymentInstruction: any): PaymentInstruction => {
  const identifier = new PaymentInstructionIdentifier(paymentInstruction.uid);
  const createDate = new Date(RequiredAttributes.requireNonNull(paymentInstruction.createDate));
  const externalReferenceIdentifier = new PaymentInstructionExternalReferenceIdentifier(
      paymentInstruction.externalReferenceIdentifier
  );
  const customerIdentifier = new CustomerIdentifier(paymentInstruction.customerUid);
  const merchantIdentifier = new MerchantIdentifier(paymentInstruction.merchantUid);
  const status:PaymentInstructionStatus = PaymentInstructionStatus[
      paymentInstruction.status as keyof typeof PaymentInstructionStatus
      ];
  const amount = new PositiveAmount(paymentInstruction.amount);
  const frequency = mapPaymentFrequency(paymentInstruction.frequency);
  const nextBillingDate = RequiredAttributes.requireNonNull(
      DateUtils.buildFutureDate(createDate, paymentInstruction.nextBillingDate)
  );
  const recurringEndDate = DateUtils.buildFutureDate(createDate, paymentInstruction.recurringEndDate);

  const rawJson = JSON.stringify(paymentInstruction);

  return new PaymentInstruction(
    identifier,
      createDate,
    new Date(RequiredAttributes.requireNonNull(paymentInstruction.updateDate)),
      rawJson,
      externalReferenceIdentifier,
      customerIdentifier,
      merchantIdentifier,
      status,
      amount,
      frequency,
      nextBillingDate,
      recurringEndDate,
      paymentInstruction.enableOptimalBillingDate,
  );
};

const fromObject = (paymentInstruction: any): PaymentInstruction => {
  try {
    return mapPaymentInstruction(paymentInstruction);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping PaymentInstruction response.`, stack);
  }
};

const mapPaymentInstructionSummary = (paymentInstructionSummary: any): PaymentInstructionSummary => {
  const identifier = new PaymentInstructionIdentifier(paymentInstructionSummary.uid);
  const externalReferenceIdentifier = new PaymentInstructionExternalReferenceIdentifier(
      paymentInstructionSummary.externalReferenceId
  );
  const customerIdentifier = new CustomerIdentifier(paymentInstructionSummary.customerUid);
  const merchantIdentifier = new MerchantIdentifier(paymentInstructionSummary.merchantUid);
  const status:PaymentInstructionStatus = PaymentInstructionStatus[
      paymentInstructionSummary.status as keyof typeof PaymentInstructionStatus
      ];
  const amount = new PositiveAmount(paymentInstructionSummary.amount);
  const frequency = mapPaymentFrequency(paymentInstructionSummary.frequency);

  const now = new Date();
  const nextBillingDate = RequiredAttributes.requireNonNull(
      DateUtils.buildFutureDate(now, paymentInstructionSummary.nextBillingDate)
  );
  const recurringEndDate = DateUtils.buildFutureDate(now, paymentInstructionSummary.recurringEndDate);

  const bankAccount = new PaymentInstructionBankAccountSummary(
      paymentInstructionSummary.bankAccount.institutionName,
      paymentInstructionSummary.bankAccount.maskedAccountNumber,
      paymentInstructionSummary.bankAccount.maskedRoutingNumber,
  );

  const rawJson = JSON.stringify(paymentInstructionSummary);

  return new PaymentInstructionSummary(
    identifier,
      externalReferenceIdentifier,
      customerIdentifier,
      merchantIdentifier,
      status,
      amount,
      frequency,
      nextBillingDate,
      recurringEndDate,
      bankAccount,
      rawJson,
  );
};

const fromSummaryObject = (paymentInstructionSummary: any): PaymentInstructionSummary => {
  try {
    return mapPaymentInstructionSummary(paymentInstructionSummary);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping PaymentInstructionSummary response.`, stack);
  }
};

const mapCreateRequest = (request: PaymentInstructionCreateArgs): BPaymentInstructionCreateRequest => {
  const frequency: BPaymentFrequency = {
    cycle: request.frequency.cycle,
    recurrence: request.frequency.recurrence.value,
  };
  const recurringEndDate = (request.recurringEndDate && request.recurringEndDate.value) || null;
  return {
    externalReferenceIdentifier: request.externalReferenceIdentifier.value,
    customerUid: request.customerIdentifier.value,
    merchantUid: request.merchantIdentifier.value,
    amount: request.amount.value,
    frequency,
    nextBillingDate: request.nextBillingDate.value,
    recurringEndDate,
    enableOptimalBillingDate: request.enableOptimalBillingDate,
  };
};

const toApiCreateRequest = (request: PaymentInstructionCreateArgs): BPaymentInstructionCreateRequest => {
  try {
    return mapCreateRequest(request);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping PaymentInstructionCreateArgs.`, stack);
  }
};

const PaymentInstructionMapper = {
  fromObject,
  fromSummaryObject,

  toApiCreateRequest,
};

export default PaymentInstructionMapper;
