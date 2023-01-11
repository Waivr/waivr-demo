import { UnauthorizedException } from '../../core/services/api/exceptions/unauthorizedException';
import { BadRequestException } from '../../core/services/api/exceptions/badRequestException';
import { InternalServerException } from '../../core/services/api/exceptions/internalServerException';
import { ConflictException } from '../../core/services/api/exceptions/conflictException';
import { StringOptionalType } from '../../core/domain/common/genericTypes';

const messageResponse = {
    badRequest: 'Wrong data in one or many fields',
    serverError: 'Internal Server Error',
    unauthorized: 'You are not authorized to sign in.',
    conflict: 'Cannot process due to conflict.'
};

const handlerRequestException = (baseException: any): StringOptionalType => {

    console.error('Handling Request Exception:', baseException);

    if (baseException instanceof UnauthorizedException) {

        return messageResponse.unauthorized;

    }

    if (baseException instanceof BadRequestException) {

        return messageResponse.badRequest;

    }

    if (baseException instanceof InternalServerException) {

        return messageResponse.serverError;

    }

    if (baseException instanceof ConflictException) {

        return messageResponse.conflict;

    }

    console.error('exception ', baseException);

    return null;

};

export default handlerRequestException;
