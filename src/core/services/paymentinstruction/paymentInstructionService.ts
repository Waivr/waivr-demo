import { AxiosInstance } from 'axios';
import { ApiAccessToken } from '../../domain/auth/apiAccessToken';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import ApiCaller from '../api/apiCaller';
import { HttpStatusCode } from '../api/httpType';
import { PaymentInstructionCreateArgs } from '../../domain/paymentinstruction/paymentInstructionCreateArgs';
import PaymentInstructionMapper from './mapper/paymentInstructionMapper';
import { PaymentInstruction } from '../../domain/paymentinstruction/paymentInstruction';
import { PaymentInstructionIdentifier } from '../../domain/paymentinstruction/paymentInstructionIdentifier';
import { PaymentInstructionSummary } from '../../domain/paymentinstruction/paymentInstructionSummary';

const create = async (
    api: AxiosInstance,
    createArgs: PaymentInstructionCreateArgs,
    token: ApiAccessToken,
): Promise<PaymentInstruction> => {
    RequiredAttributes.requireNonNull(createArgs);
    RequiredAttributes.requireNonNull(token);

    const request = PaymentInstructionMapper.toApiCreateRequest(createArgs);

    const header = ApiCaller.headerBuilder(token);

    const callApi = () => api
        .post(
            '/v1/paymentinstructions',
            JSON.stringify(request),
            header
        );
    return ApiCaller.caller(callApi, PaymentInstructionMapper.fromObject, HttpStatusCode.CREATED);
};

const findSummary = async (
    api: AxiosInstance,
    paymentInstructionIdentifier: PaymentInstructionIdentifier,
    token: ApiAccessToken,
): Promise<PaymentInstructionSummary> => {
    RequiredAttributes.requireNonNull(paymentInstructionIdentifier);
    RequiredAttributes.requireNonNull(token);

    const url = `/v1/paymentinstructions/${paymentInstructionIdentifier.value}/summary`;
    const header = ApiCaller.headerBuilder(token);

    const callApi = () => api
        .get(
            url,
            header
        );
    return ApiCaller.caller(callApi, PaymentInstructionMapper.fromSummaryObject, HttpStatusCode.OK);
};


export interface IPaymentInstructionService {
    create: (createArgs: PaymentInstructionCreateArgs, token: ApiAccessToken) => (Promise<PaymentInstruction>),
    findSummary: (paymentInstructionIdentifier: PaymentInstructionIdentifier, token: ApiAccessToken) => (Promise<PaymentInstructionSummary>),
}

const instance = (api: AxiosInstance): IPaymentInstructionService => {
    RequiredAttributes.requireNonNull(api);

    return {
        create: (createArgs: PaymentInstructionCreateArgs, token: ApiAccessToken) => create(api, createArgs, token),
        findSummary: (paymentInstructionIdentifier: PaymentInstructionIdentifier, token: ApiAccessToken) => findSummary(api, paymentInstructionIdentifier, token),
    };
};

const PaymentInstructionService = {
    instance
};

export default PaymentInstructionService;
