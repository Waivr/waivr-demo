import { AxiosRequestConfig, AxiosResponse } from 'axios';
import ApiRequestValidator from './apiRequestValidator';
import { BaseHttpException } from './exceptions/baseHttpException';
import ErrorMapper from './mapper/error/errorMapper';
import { HttpStatusCode } from './httpType';
import buildHttpException from './mapper/exception/exceptionBuilder';
import { ApiAccessToken } from '../../domain/auth/apiAccessToken';

const processException = (exception: any, callApi: () => Promise<AxiosResponse>): BaseHttpException => {

  if (exception instanceof BaseHttpException) {

    throw exception;

  }

  const apiError = ErrorMapper.mapApiError(exception);
  console.error('Error while calling api. ', apiError, callApi);

  const logContext = ErrorMapper.buildLogContext(apiError);
  // DataLogging.captureException(exception, logContext);
  console.error('Error calling api', exception, logContext);

  const stack = exception instanceof Error ? exception.stack : undefined;

  return buildHttpException(apiError, stack);

};


const callerAndForget = async (
  callApi: () => Promise<AxiosResponse>,
  expectedStatusCode?: HttpStatusCode
): Promise<void> => {

  try {

    const response: AxiosResponse = await callApi();
    console.debug(response);
    ApiRequestValidator.checkStatus(response, expectedStatusCode);

  } catch (exception) {

    throw processException(exception, callApi);

  }

};

const caller = async <T>(
  callApi: () => Promise<AxiosResponse>,
  mapper: (payload: any, header?: any) => T,
  expectedStatusCode?: HttpStatusCode
  ): Promise<T> => {

  try {

    const response: AxiosResponse = await callApi();
    console.debug('response', response);
    ApiRequestValidator.checkStatus(response, expectedStatusCode);

    return mapper(response.data, response.headers);

  } catch (exception) {

    console.error(exception);
    throw processException(exception, callApi);

  }

};

const headerBuilder = (token: ApiAccessToken): AxiosRequestConfig => ({
  headers: {
    Authorization: `${token.key} ${token.secret}`
  }
});

const ApiCaller = {
  caller,
  callerAndForget,
  headerBuilder
};

export default ApiCaller;
