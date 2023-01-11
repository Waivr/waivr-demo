import { AxiosResponse } from 'axios';
import RequiredAttributes from '../../paramutils/requiredAttributes';
import { HttpStatusCode } from './httpType';
import { BaseHttpException } from './exceptions/baseHttpException';
import mapSession from './mapper/sessionMapper';

const checkForStatus = (response: AxiosResponse, expectedHttpStatusCode: HttpStatusCode): void => {

  const httpStatusCode = response.status;

  if (httpStatusCode === expectedHttpStatusCode) {

    return;

  }

  const session = mapSession(response.headers);

  const payload = JSON.stringify(response.data);
  const errorMessage = `Axios did not fail. However httpStatusCode=${httpStatusCode} different from expectedHttpStatusCode=${expectedHttpStatusCode} and with returned payload=${payload}`;
  throw new BaseHttpException(
    errorMessage,
    session
  );

};

const checkStatus = (response: AxiosResponse, httpStatusCode?: HttpStatusCode | null): void => {

  const expectedHttpStatusCode = RequiredAttributes
    .requireNonNullOrElse(httpStatusCode, HttpStatusCode.OK);
  checkForStatus(response, expectedHttpStatusCode);

};


const ApiRequestValidator = {
  checkStatus,
};

export default ApiRequestValidator;
