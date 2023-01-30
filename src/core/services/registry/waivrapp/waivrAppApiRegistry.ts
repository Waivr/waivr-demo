import axios, { AxiosInstance } from 'axios';
import EnvironmentVars from '../../../config/EnvironmentVars';
import RequiredAttributes from '../../../paramutils/requiredAttributes';
import MerchantService, { IMerchantService } from '../../merchant/merchantService';
import CustomerService, { ICustomerService } from '../../customer/customerService';
import ConnectAccountService, { IConnectAccountService } from '../../connectaccount/connectAccountService';
import PaymentInstructionService, {
    IPaymentInstructionService
} from '../../paymentinstruction/paymentInstructionService';
import PaymentService, { IPaymentService } from '../../payment/paymentService';
import { IEnvironmentConstants } from '../../../config/constants';

const api = (constants?: IEnvironmentConstants) => {
    const baseURL = EnvironmentVars.getEnvVars(constants).waivrAppApi;
    return axios.create({
        withCredentials: false,
        baseURL,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const merchantService = (axiosInstance: AxiosInstance) => MerchantService.instance(axiosInstance);
const customerService = (axiosInstance: AxiosInstance) => CustomerService.instance(axiosInstance);
const connectAccountService = (axiosInstance: AxiosInstance) => ConnectAccountService.instance(axiosInstance);
const paymentInstructionService = (axiosInstance: AxiosInstance) => PaymentInstructionService.instance(axiosInstance);
const paymentService = (axiosInstance: AxiosInstance) => PaymentService.instance(axiosInstance);

export interface IWaivrAppApiRegistry {
    merchantService: () => IMerchantService;
    customerService: () => ICustomerService;
    connectAccountService: () => IConnectAccountService;
    paymentInstructionService: () => IPaymentInstructionService;
    paymentService: () => IPaymentService;
}

const instance = (axiosInstance: AxiosInstance): IWaivrAppApiRegistry => ({
    merchantService: () => merchantService(axiosInstance),
    customerService: () => customerService(axiosInstance),
    connectAccountService: () => connectAccountService(axiosInstance),
    paymentInstructionService: () => paymentInstructionService(axiosInstance),
    paymentService: () => paymentService(axiosInstance),
});

const WaivrAppApiRegistry = {
    instance: (axiosInstance?: AxiosInstance, constants?: IEnvironmentConstants) => {
        const apiInstance = RequiredAttributes.requireNonNullOrElse(
            axiosInstance,
            api(constants)
        );
        return instance(apiInstance);
}
};

export default WaivrAppApiRegistry;
