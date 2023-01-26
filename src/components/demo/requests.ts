import axios, { AxiosResponse } from 'axios';
import EnvironmentVars from '../../core/config/EnvironmentVars';

export const baseRequest = async (
  path: string,
  body: any
): Promise<{ response: AxiosResponse<any, any> | undefined; error: any }> => {
  let response;
  let error;
  await axios
    .post(`${EnvironmentVars.demoApi}${path}`, body)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      error = err;
    });

  return { response, error };
};

export const createCustomer = async (
  body: any
): Promise<{ response: AxiosResponse<any, any> | undefined; error: any }> =>
  baseRequest('/api/create-customer', body);

export const connectAccounts = async (
  body: any
): Promise<{ response: AxiosResponse<any, any> | undefined; error: any }> =>
  baseRequest('/api/connect-accounts', body);

export const paymentInstructions = async (
  body: any
): Promise<{ response: AxiosResponse<any, any> | undefined; error: any }> =>
  baseRequest('/api/payment-instructions', body);

export const confirmPayment = async (
  body: any
): Promise<{ response: AxiosResponse<any, any> | undefined; error: any }> =>
  baseRequest('/api/confirm-payment', body);
