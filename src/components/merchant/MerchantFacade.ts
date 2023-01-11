import { AxiosInstance } from 'axios';
import { MerchantSearchRequest } from '../../core/domain/merchant/merchantSearchRequest';
import { Page } from '../../core/domain/common/pageable/page';
import { Merchant } from '../../core/domain/merchant/merchant';
import { IMerchantService } from '../../core/services/merchant/merchantService';
import StorageContentManager from '../../core/storage/storageContentManager';
import { ApiAccessToken } from '../../core/domain/auth/apiAccessToken';
import RequiredAttributes from '../../core/paramutils/requiredAttributes';
import WaivrAppApiRegistry from '../../core/services/registry/waivrapp/waivrAppApiRegistry';

export interface IMerchantFacade {

    search: (searchRequest: MerchantSearchRequest) => Promise<Page<Merchant>>;

}

interface IMerchantFacadeInstances {

    merchantService: IMerchantService;

}

const merchantFacade = (merchantFacadeInstances: IMerchantFacadeInstances): IMerchantFacade => {

    const {
        merchantService
    } = merchantFacadeInstances;

    const getToken = async (): Promise<ApiAccessToken> => RequiredAttributes.requireNonNull(await StorageContentManager.getToken());

    const search = async (searchRequest: MerchantSearchRequest): Promise<Page<Merchant>> => {

        const token: ApiAccessToken = await getToken();

        return merchantService.search(searchRequest, token);

    };

    return {
        search
    };

};


const instance = (api?: AxiosInstance): IMerchantFacade => {

    const waivrAppApiRegistry = WaivrAppApiRegistry.instance(api);

    const facadeInstances: IMerchantFacadeInstances = {
        merchantService: waivrAppApiRegistry.merchantService()
    };

    return merchantFacade(facadeInstances);

};

const MerchantFacade = {
    instance
};

export default MerchantFacade;

