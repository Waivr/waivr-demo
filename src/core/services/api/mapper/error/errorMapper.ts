import RequiredAttributes from '../../../../paramutils/requiredAttributes';
import { IError } from '../../../../domain/common/errorType';
import { BApiError, HttpStatusCode } from '../../httpType';
import { LogContext, LogSeverity, LogStatus } from '../../../../domain/logging/loggingType';
import mapSession from '../sessionMapper';

const DESCRIPTION = 'unknown';

const mapError = (responseData: any): IError => {

    if (RequiredAttributes.isUndefinedOrNull(responseData)) {

        return {
            description: DESCRIPTION,
            details: null,
        };
    
    }

    return {
        description: responseData.description || responseData.error || DESCRIPTION,
        details: responseData.details || null,
    };

};

const mapApiError = (exception: any): BApiError => {

    const response = exception && exception.response;

    if (RequiredAttributes.isUndefinedOrNull(response)) {

        return {
            description: DESCRIPTION,
            details: null,
            httpStatusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
            session: {
                reqSessionUuid: null,
                userSessionUuid: null,
            },
        };
    
    }

    const error = mapError(response.data);

    const httpStatusCode = response.status || HttpStatusCode.INTERNAL_SERVER_ERROR;

    const session = mapSession(response.headers);

    return {
        ...error,
        httpStatusCode,
        session,
    };

};

const mapSeverity = (httpStatusCode: HttpStatusCode): LogSeverity => {

    switch (httpStatusCode) {

        case HttpStatusCode.OK:
        case HttpStatusCode.CREATED:
            return LogSeverity.Info;
        case HttpStatusCode.INTERNAL_SERVER_ERROR:
            return LogSeverity.Fatal;
        default:
            return LogSeverity.Error;
    
    }

};

const mapStatus = (httpStatusCode: HttpStatusCode): LogStatus => {

    switch (httpStatusCode) {

        case HttpStatusCode.OK:
        case HttpStatusCode.CREATED:
            return LogStatus.Ok;
        case HttpStatusCode.INTERNAL_SERVER_ERROR:
            return LogStatus.Fatal;
        default:
            return LogStatus.Error;

    }

};

const buildLogContext = (apiError: BApiError): LogContext => {

    const level = mapSeverity(apiError.httpStatusCode);
    const status = mapStatus(apiError.httpStatusCode);

    return {
        user: null,
        level,
        tags: null,
        status,
        session: apiError.session,
    };

};

const ErrorMapper = {
    mapError,
    mapApiError,
    buildLogContext,
};

export default ErrorMapper;
