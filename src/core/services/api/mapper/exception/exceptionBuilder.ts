import { BaseHttpException } from '../../exceptions/baseHttpException';
import { BApiError, HttpStatusCode } from '../../httpType';
import { BadRequestException } from '../../exceptions/badRequestException';
import { ConflictException } from '../../exceptions/conflictException';
import { InternalServerException } from '../../exceptions/internalServerException';
import { NotFoundException } from '../../exceptions/notFoundException';
import { UnauthorizedException } from '../../exceptions/unauthorizedException';

const buildUnknown = (apiError: BApiError, stack: string | undefined): BaseHttpException => new BaseHttpException(
    `Unknown api error for httpStatusCode=${apiError.httpStatusCode},
     session=${apiError.session}
     and description=${apiError.description}.`,
    apiError.session,
    apiError.details,
  stack
  );

const buildBadRequest = (apiError: BApiError, stack: string | undefined): BadRequestException => new BadRequestException(
  `Request contains errors: description=${apiError.description}`,
  apiError.session,
  apiError.details,
  stack
);

const buildConflict = (apiError: BApiError, stack: string | undefined): ConflictException => new ConflictException(
  `Request couldn't be processed due to conflicts: description=${apiError.description}`,
  apiError.session,
  apiError.details,
  stack
);

const buildInternalServer = (apiError: BApiError, stack: string | undefined): InternalServerException => new InternalServerException(
  `Request couldn't be processed due an internal server error: description=${apiError.description}`,
  apiError.session,
  apiError.details,
  stack
);

const buildNotFound = (apiError: BApiError, stack: string | undefined): NotFoundException => new NotFoundException(
  `Could not find the resource: description=${apiError.description}`,
  apiError.session,
  apiError.details,
  stack
);

const buildUnauthorized = (apiError: BApiError, stack: string | undefined): UnauthorizedException => new UnauthorizedException(
  `Access is unauthorized: description=${apiError.description}`,
  apiError.session,
  apiError.details,
  stack
);


const buildHttpException = (apiError: BApiError, stack?: string): BaseHttpException => {

  switch (apiError.httpStatusCode) {

    case HttpStatusCode.BAD_REQUEST:
      return buildBadRequest(apiError, stack);
    case HttpStatusCode.CONFLICT:
      return buildConflict(apiError, stack);
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      return buildInternalServer(apiError, stack);
    case HttpStatusCode.NOT_FOUND:
      return buildNotFound(apiError, stack);
    case HttpStatusCode.UNAUTHORIZED:
      return buildUnauthorized(apiError, stack);
    default:
      return buildUnknown(apiError, stack);

  }

};

export default buildHttpException;
