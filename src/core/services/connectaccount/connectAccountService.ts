import { AxiosInstance } from 'axios';
import { ApiAccessToken } from '../../domain/auth/apiAccessToken';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import ApiCaller from '../api/apiCaller';
import { HttpStatusCode } from '../api/httpType';
import { ConnectAccountRenderCreateArgs } from '../../domain/connectaccount/connectAccountRenderCreateArgs';
import { ConnectAccountCreateArgs } from '../../domain/connectaccount/connectAccountCreateArgs';
import { ConnectAccountRender } from '../../domain/connectaccount/connectAccountRender';
import ConnectAccountMapper from './mapper/connectAccountMapper';

const createRenderLink = async (
    api: AxiosInstance,
    args: ConnectAccountRenderCreateArgs,
    token: ApiAccessToken,
): Promise<ConnectAccountRender> => {
    RequiredAttributes.requireNonNull(args);
    RequiredAttributes.requireNonNull(token);

    const request = ConnectAccountMapper.toApiRenderRequest(args);

    const header = ApiCaller.headerBuilder(token);

    const callApi = () => api
        .post(
            '/v1/connectaccounts/render',
            JSON.stringify(request),
            header
        );
    return ApiCaller.caller(callApi, ConnectAccountMapper.fromRenderObject, HttpStatusCode.CREATED);
};

const linkCustomerAccount = async (
    api: AxiosInstance,
    args: ConnectAccountCreateArgs,
    token: ApiAccessToken,
): Promise<void> => {
    RequiredAttributes.requireNonNull(args);
    RequiredAttributes.requireNonNull(token);

    const request = ConnectAccountMapper.toApiCreateRequest(args);

    const header = ApiCaller.headerBuilder(token);

    const callApi = () => api
        .post(
            '/v1/connectaccounts/connect',
            JSON.stringify(request),
            header
        );
    await ApiCaller.callerAndForget(callApi, HttpStatusCode.CREATED);
};


export interface IConnectAccountService {
    createRenderLink: (renderCreateArgs: ConnectAccountRenderCreateArgs, token: ApiAccessToken) => (Promise<ConnectAccountRender>),
    linkCustomerAccount: (createArgs: ConnectAccountCreateArgs, token: ApiAccessToken) => Promise<void>,
}

const instance = (api: AxiosInstance): IConnectAccountService => {
    RequiredAttributes.requireNonNull(api);

    return {
        createRenderLink: (renderCreateArgs: ConnectAccountRenderCreateArgs, token: ApiAccessToken) => createRenderLink(api, renderCreateArgs, token),
        linkCustomerAccount: (createArgs: ConnectAccountCreateArgs, token: ApiAccessToken) => linkCustomerAccount(api, createArgs, token),
    };
};

const ConnectAccountService = {
    instance
};

export default ConnectAccountService;
