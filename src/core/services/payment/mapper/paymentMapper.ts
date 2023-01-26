import { BPaymentCreateRequest } from '../entities/entityTypes';
import { MappingException } from '../../../domain/exceptions/mappingException';
import RequiredAttributes from '../../../paramutils/requiredAttributes';
import { PaymentCreateArgs } from '../../../domain/payment/paymentCreateArgs';
import { Payment } from '../../../domain/payment/payment';
import { PaymentIdentifier } from '../../../domain/payment/paymentIdentifier';
import { PaymentStatus } from '../../../domain/payment/paymentStatus';
import { PositiveAmount } from '../../../domain/common/numbers/positiveAmount';
import DateUtils from '../../../paramutils/dateUtils';

const mapPayment = (payment: any): Payment => {
  const paymentIdentifier = new PaymentIdentifier(payment.uid);
  const createDate = new Date(RequiredAttributes.requireNonNull(payment.createDate));
  const status:PaymentStatus = PaymentStatus[
      payment.status as keyof typeof PaymentStatus
      ];
  const amount = new PositiveAmount(payment.amount);
  const paymentDate = RequiredAttributes.requireNonNull(
    DateUtils.buildFutureDate(createDate, new Date(payment.paymentDate))
  );

  const rawJson = JSON.stringify(payment);

  return new Payment(
    paymentIdentifier,
    createDate,
    new Date(RequiredAttributes.requireNonNull(payment.updateDate)),
    rawJson,
    status,
    amount,
      paymentDate,
  );
};

const fromObject = (payment: any): Payment => {
  try {
    return mapPayment(payment);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping Payment response.`, stack);
  }
};

const mapCreateRequest = (request: PaymentCreateArgs): BPaymentCreateRequest => ({
  paymentInstructionUid: request.paymentInstructionIdentifier.value,
  methodType: request.methodType,
});

const toApiCreateRequest = (request:PaymentCreateArgs): BPaymentCreateRequest => {
  try {
    return mapCreateRequest(request);
  } catch (err) {
    if (err instanceof MappingException) {
      throw err;
    }

    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping PaymentCreateArgs.`, stack);
  }
};

const PaymentMapper = {
  fromObject,

  toApiCreateRequest,
};

export default PaymentMapper;
