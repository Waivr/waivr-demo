import { AxiosInstance } from 'axios/index';
import { ApiAccessToken } from '../../domain/auth/apiAccessToken';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import ApiCaller from '../api/apiCaller';
import { MerchantSearchRequest } from '../../domain/merchant/merchantSearchRequest';
import { Merchant } from '../../domain/merchant/merchant';
import { Page } from '../../domain/common/pageable/page';
import MerchantMapper from './mapper/merchantMapper';

const search = async (
    api: AxiosInstance,
    searchRequest: MerchantSearchRequest,
    token: ApiAccessToken,
): Promise<Page<Merchant>> => {

    RequiredAttributes.requireNonNull(searchRequest);
    RequiredAttributes.requireNonNull(token);

    const request = MerchantMapper.toApiSearchRequest(searchRequest);

    const header = ApiCaller.headerBuilder(token);

    const callApi = () => api
        .post(
            '/v1/merchants/search',
            JSON.stringify(request),
            header
        );
    return ApiCaller.caller(callApi, MerchantMapper.fromPage);

};


export interface IMerchantService {
    search: (request: MerchantSearchRequest, token: ApiAccessToken) => (Promise<Page<Merchant>>),
}

const instance = (api: AxiosInstance): IMerchantService => {

    RequiredAttributes.requireNonNull(api);

    return {
        search: (request: MerchantSearchRequest, token: ApiAccessToken) => search(api, request, token),
    };

};

const MerchantService = {
    instance
};

export default MerchantService;
