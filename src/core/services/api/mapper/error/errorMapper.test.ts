import ErrorMapper from './errorMapper';
import { BApiError, HttpStatusCode } from '../../httpType';
import { IError } from '../../../../domain/common/errorType';
import { LogSeverity, LogStatus } from '../../../../domain/logging/loggingType';

describe('errorMapper tests', () => {

    const EXPECTED_DEFAULT: IError = { description: 'unknown', details: null };
    const EXPECTED_API_DEFAULT: BApiError = {
        ...EXPECTED_DEFAULT,
        httpStatusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
        session: {
            reqSessionUuid: null,
            userSessionUuid: null,
        },
    };

    it('mapError_whenInvalidResponse_thenErrorUnknown', () => {

        const undefinedError = ErrorMapper.mapError(undefined);
        expect(undefinedError).toEqual(EXPECTED_DEFAULT);

        const nullError = ErrorMapper.mapError(null);
        expect(nullError).toEqual(EXPECTED_DEFAULT);

    });

    it('mapError_whenInvalidDescription_andInvalidError_thenErrorUnknown', () => {

        const error = ErrorMapper.mapError({ });
        expect(error).toEqual(EXPECTED_DEFAULT);

    });

    it('mapError_whenInvalidDescription_thenFallbackOnError', () => {

        const undefinedResponseData = {
            error: 'some error',
        };

        const error = ErrorMapper.mapError(undefinedResponseData);
        expect(error)
            .toEqual({ description: 'some error', details: null });

    });

    it('mapError_whenValidResponse_thenAssertMappedOk', () => {

        const undefinedResponseData = {
            description: 'description error',
            details: 'details error',
        };

        const error = ErrorMapper.mapError(undefinedResponseData);
        expect(error)
            .toEqual({ description: 'description error', details: 'details error' });

    });

    it('mapApiError_whenInvalidException_thenAssertDefaultFallbacks', () => {

        let error = ErrorMapper.mapApiError(null);
        expect(error).toEqual(EXPECTED_API_DEFAULT);

        error = ErrorMapper.mapApiError(undefined);
        expect(error).toEqual(EXPECTED_API_DEFAULT);

        error = ErrorMapper.mapApiError({ response: { } });
        expect(error).toEqual(EXPECTED_API_DEFAULT);

    });

    it('mapApiError_whenInvalidResponse_thenErrorUnknown', () => {

        const error = ErrorMapper.mapApiError({ response: { data: null } });
        expect(error).toEqual(EXPECTED_API_DEFAULT);

    });

    it('mapApiError_whenValidException_andNoHeaders_thenAssertMappedOk', () => {

        const exception = {
            response: {
                data: {
                    description: 'description error',
                    details: 'details error',
                },
                headers: {},
                status: 403
            }
        };

        const error = ErrorMapper.mapApiError(exception);
        expect(error)
            .toEqual({
                description: 'description error',
                details: 'details error',
                httpStatusCode: 403,
                session: {
                    reqSessionUuid: null,
                    userSessionUuid: null,
                },
            });

    });

    it('mapApiError_whenValid_thenAssertMappedOk', () => {

        const exception = {
            response: {
                data: {
                    description: 'description error',
                    details: 'details error',
                },
                headers: {
                    'x-req-session-id': 'req-id-1',
                    'x-user-session-id': 'user-id-2',
                },
                status: 401
            }
        };

        const error = ErrorMapper.mapApiError(exception);
        expect(error)
            .toEqual({
                description: 'description error',
                details: 'details error',
                httpStatusCode: 401,
                session: {
                    reqSessionUuid: 'req-id-1',
                    userSessionUuid: 'user-id-2',
                },
            });

    });

    it('buildLogContext_whenUnmappedSeverity_andUnmappedStatus_thenReturnsDefaults', () => {

        const apiError: BApiError = {
            description: 'Api Error',
            details: null,
            httpStatusCode: 403,
            session: {
                userSessionUuid: null,
                reqSessionUuid: null,
            },
        };

        const severity = ErrorMapper.buildLogContext(apiError);
        expect(severity)
            .toEqual({
                user: null,
                level: LogSeverity.Error,
                tags: null,
                status: LogStatus.Error,
                session: {
                    userSessionUuid: null,
                    reqSessionUuid: null,
},
            });

    });

    it('buildLogContext_whenStatusCode200_thenReturnsMaps', () => {

        const apiError: BApiError = {
            description: 'Api Error',
            details: null,
            httpStatusCode: 200,
            session: {
                userSessionUuid: '1239-sda',
                reqSessionUuid: '932r5jd-asfas',
            },
        };

        const severity = ErrorMapper.buildLogContext(apiError);
        expect(severity)
            .toEqual({
                user: null,
                level: LogSeverity.Info,
                tags: null,
                status: LogStatus.Ok,
                session: {
                    userSessionUuid: '1239-sda',
                    reqSessionUuid: '932r5jd-asfas',
                },
            });

    });

    it('buildLogContext_whenStatusCode201_thenReturnsMaps', () => {

        const apiError: BApiError = {
            description: 'Api Error',
            details: null,
            httpStatusCode: 201,
            session: {
                userSessionUuid: '1239-sda',
                reqSessionUuid: '932r5jd-asfas',
            },
        };

        const severity = ErrorMapper.buildLogContext(apiError);
        expect(severity)
            .toEqual({
                user: null,
                level: LogSeverity.Info,
                tags: null,
                status: LogStatus.Ok,
                session: {
                    userSessionUuid: '1239-sda',
                    reqSessionUuid: '932r5jd-asfas',
                },
            });

    });

    it('buildLogContext_whenStatusCode500_thenReturnsMaps', () => {

        const apiError: BApiError = {
            description: 'Api Error',
            details: null,
            httpStatusCode: 500,
            session: {
                userSessionUuid: '1239-sda',
                reqSessionUuid: '932r5jd-asfas',
            },
        };

        const severity = ErrorMapper.buildLogContext(apiError);
        expect(severity)
            .toEqual({
                user: null,
                level: LogSeverity.Fatal,
                tags: null,
                status: LogStatus.Fatal,
                session: {
                    userSessionUuid: '1239-sda',
                    reqSessionUuid: '932r5jd-asfas',
                },
            });

    });

});
