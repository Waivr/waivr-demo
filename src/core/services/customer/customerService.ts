import { AxiosInstance } from 'axios';
import { ApiAccessToken } from '../../domain/auth/apiAccessToken';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import ApiCaller from '../api/apiCaller';
import { CustomerCreateArgs } from '../../domain/customer/customerCreateArgs';
import { Customer } from '../../domain/customer/customer';
import CustomerMapper from './mapper/customerMapper';
import { HttpStatusCode } from '../api/httpType';

const create = async (
    api: AxiosInstance,
    createArgs: CustomerCreateArgs,
    token: ApiAccessToken,
): Promise<Customer> => {
    RequiredAttributes.requireNonNull(createArgs);
    RequiredAttributes.requireNonNull(token);

    const request = CustomerMapper.toApiCreateRequest(createArgs);

    const header = ApiCaller.headerBuilder(token);

    const callApi = () => api
        .post(
            '/v1/customers/',
            JSON.stringify(request),
            header
        );
    return ApiCaller.caller(callApi, CustomerMapper.fromObject, HttpStatusCode.CREATED);
};


export interface ICustomerService {
    create: (createArgs: CustomerCreateArgs, token: ApiAccessToken) => (Promise<Customer>),
}

const instance = (api: AxiosInstance): ICustomerService => {
    RequiredAttributes.requireNonNull(api);

    return {
        create: (createArgs: CustomerCreateArgs, token: ApiAccessToken) => create(api, createArgs, token),
    };
};

const CustomerService = {
    instance
};

export default CustomerService;
