import buildHttpException from './exceptionBuilder';
import { IContextSession } from '../../../../domain/session/sessionTypes';
import { IError } from '../../../../domain/common/errorType';
import { BApiError, HttpStatusCode } from '../../httpType';
import { BadRequestException } from '../../exceptions/badRequestException';
import { ConflictException } from '../../exceptions/conflictException';
import { InternalServerException } from '../../exceptions/internalServerException';
import { NotFoundException } from '../../exceptions/notFoundException';
import { UnauthorizedException } from '../../exceptions/unauthorizedException';

describe('exceptionBuilder', () => {

  const doFail = (err: any): void => {

    // fail() does not work yet due to https://github.com/facebook/jest/issues/11698#issuecomment-922351139
    throw new Error(`Exception: ${err} is should not be thrown from mapper.`);

  };

  const SESSION: IContextSession = {
    reqSessionUuid: 'req-id-1',
    userSessionUuid: 'user-id-2',
  };

  const DEFAULT_ERROR: IError = {
    description: 'default error',
    details: null,
  };

  it('buildHttpException_whenBadRequest_thenBuildsBadRequestException', async () => {

    const apiError: BApiError = {
      ...DEFAULT_ERROR,
      session: SESSION,
      httpStatusCode: HttpStatusCode.BAD_REQUEST
    };

    const exception = buildHttpException(apiError);
    if (!(exception instanceof BadRequestException)) {

      doFail(exception);

    }

    const badRequest = exception as BadRequestException;
    expect(badRequest.message)
      .toEqual(`Request contains errors: description=${DEFAULT_ERROR.description}`);
    expect(badRequest.session).toEqual(SESSION);


  });

  it('buildHttpException_whenConflict_thenBuildsConflictException', async () => {

    const apiError: BApiError = {
      ...DEFAULT_ERROR,
      session: SESSION,
      httpStatusCode: HttpStatusCode.CONFLICT
    };

    const exception = buildHttpException(apiError);
    if (!(exception instanceof ConflictException)) {

      doFail(exception);

    }

    const badRequest = exception as ConflictException;
    expect(badRequest.message)
      .toEqual(`Request couldn't be processed due to conflicts: description=${DEFAULT_ERROR.description}`);
    expect(badRequest.session).toEqual(SESSION);


  });

  it('buildHttpException_whenInternalServer_thenBuildsInternalServerException', async () => {

    const apiError: BApiError = {
      ...DEFAULT_ERROR,
      session: SESSION,
      httpStatusCode: HttpStatusCode.INTERNAL_SERVER_ERROR
    };

    const exception = buildHttpException(apiError);
    if (!(exception instanceof InternalServerException)) {

      doFail(exception);

    }

    const badRequest = exception as InternalServerException;
    expect(badRequest.message)
      .toEqual(`Request couldn't be processed due an internal server error: description=${DEFAULT_ERROR.description}`);
    expect(badRequest.session).toEqual(SESSION);


  });

  it('buildHttpException_whenNotFound_thenBuildsNotFoundException', async () => {

    const apiError: BApiError = {
      ...DEFAULT_ERROR,
      session: SESSION,
      httpStatusCode: HttpStatusCode.NOT_FOUND
    };

    const exception = buildHttpException(apiError);
    if (!(exception instanceof NotFoundException)) {

      doFail(exception);

    }

    const badRequest = exception as NotFoundException;
    expect(badRequest.message)
      .toEqual(`Could not find the resource: description=${DEFAULT_ERROR.description}`);
    expect(badRequest.session).toEqual(SESSION);


  });

  it('buildHttpException_whenUnauthorized_thenBuildsUnauthorizedException', async () => {

    const apiError: BApiError = {
      ...DEFAULT_ERROR,
      session: SESSION,
      httpStatusCode: HttpStatusCode.UNAUTHORIZED
    };

    const exception = buildHttpException(apiError);
    if (!(exception instanceof UnauthorizedException)) {

      doFail(exception);

    }

    const badRequest = exception as UnauthorizedException;
    expect(badRequest.message)
      .toEqual(`Access is unauthorized: description=${DEFAULT_ERROR.description}`);
    expect(badRequest.session).toEqual(SESSION);


  });

  it('buildHttpException_whenUnknown_thenBuildsBaseHttpException', async () => {

    const apiError: BApiError = {
      ...DEFAULT_ERROR,
      session: SESSION,
      httpStatusCode: 111
    };

    const exception = buildHttpException(apiError);

    const expectedMessage = `Unknown api error for httpStatusCode=${apiError.httpStatusCode},
     session=${apiError.session}
     and description=${apiError.description}.`;
    expect(exception.message).toEqual(expectedMessage);
    expect(exception.session).toEqual(SESSION);


  });

});
