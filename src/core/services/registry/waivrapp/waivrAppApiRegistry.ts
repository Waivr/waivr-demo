import axios, { AxiosInstance } from 'axios';
import EnvironmentVars from '../../../config/EnvironmentVars';
import RequiredAttributes from '../../../paramutils/requiredAttributes';
import MerchantService, { IMerchantService } from '../../merchant/merchantService';

const api = () => axios.create({
        withCredentials: false,
        baseURL: EnvironmentVars.waivrAppApi,
        headers: {
            'Content-Type': 'application/json'
        }
    });

const merchantService = (axiosInstance: AxiosInstance) => MerchantService.instance(axiosInstance);

export interface IWaivrAppApiRegistry {
    merchantService: () => IMerchantService;
}

const instance = (axiosInstance: AxiosInstance): IWaivrAppApiRegistry => ({
    merchantService: () => merchantService(axiosInstance),
});

const WaivrAppApiRegistry = {
    instance: (axiosInstance?: AxiosInstance) => {

        const apiInstance = RequiredAttributes.requireNonNullOrElse(
            axiosInstance,
            api()
        );
        return instance(apiInstance);
    
}
};

export default WaivrAppApiRegistry;
