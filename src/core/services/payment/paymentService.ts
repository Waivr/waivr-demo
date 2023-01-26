import { AxiosInstance } from 'axios';
import { ApiAccessToken } from '../../domain/auth/apiAccessToken';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import ApiCaller from '../api/apiCaller';
import { HttpStatusCode } from '../api/httpType';
import { PaymentCreateArgs } from '../../domain/payment/paymentCreateArgs';
import { Payment } from '../../domain/payment/payment';
import PaymentMapper from './mapper/paymentMapper';

const create = async (
    api: AxiosInstance,
    createArgs: PaymentCreateArgs,
    token: ApiAccessToken,
): Promise<Payment> => {
    RequiredAttributes.requireNonNull(createArgs);
    RequiredAttributes.requireNonNull(token);

    const request = PaymentMapper.toApiCreateRequest(createArgs);

    const header = ApiCaller.headerBuilder(token);

    const callApi = () => api
        .post(
            '/v1/payments/',
            JSON.stringify(request),
            header
        );
    return ApiCaller.caller(callApi, PaymentMapper.fromObject, HttpStatusCode.CREATED);
};

export interface IPaymentService {
    create: (createArgs: PaymentCreateArgs, token: ApiAccessToken) => (Promise<Payment>),
}

const instance = (api: AxiosInstance): IPaymentService => {
    RequiredAttributes.requireNonNull(api);

    return {
        create: (createArgs: PaymentCreateArgs, token: ApiAccessToken) => create(api, createArgs, token),
    };
};

const PaymentService = {
    instance
};

export default PaymentService;
