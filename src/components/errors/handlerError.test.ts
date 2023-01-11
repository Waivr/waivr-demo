import { UnauthorizedException } from '../../core/services/api/exceptions/unauthorizedException';
import handlerRequestException from './handlerError';
import { BadRequestException } from '../../core/services/api/exceptions/badRequestException';
import { InternalServerException } from '../../core/services/api/exceptions/internalServerException';
import { ConflictException } from '../../core/services/api/exceptions/conflictException';
import { NotFoundException } from '../../core/services/api/exceptions/notFoundException';

describe('handleError', () => {

    it('Assert handler for unauthorized.', () => {

        const unauthorized = new UnauthorizedException(
          'unauthorized',
          { reqSessionUuid: null, userSessionUuid: null }
        );

        const axiosResponse = handlerRequestException(unauthorized);
        expect(axiosResponse)
            .toEqual('You are not authorized to sign in.');

    });

    it('Assert handler for badRequest.', () => {

        const badRequest = new BadRequestException(
          'bad request',
          { reqSessionUuid: null, userSessionUuid: null }
        );

        const axiosResponse = handlerRequestException(badRequest);
        expect(axiosResponse)
            .toEqual('Wrong data in one or many fields');

    });

    it('Assert handler for serverError.', () => {

        const serverError = new InternalServerException(
          'internal server error',
          { reqSessionUuid: null, userSessionUuid: null }
        );

        const axiosResponse = handlerRequestException(serverError);
        expect(axiosResponse)
            .toEqual('Internal Server Error');

    });

    it('handlerRequestError_whenUnmappedStatusCode_thenConflict', () => {

        const conflict = new ConflictException(
          'conflict error',
            { reqSessionUuid: null, userSessionUuid: null }
        );

        const axiosResponse = handlerRequestException(conflict);
        expect(axiosResponse)
            .toEqual('Cannot process due to conflict.');

    });

    it('handlerRequestError_whenUnmappedStatusCode_thenEmptyObject', () => {

        const conflict = new NotFoundException(
          'not found error',
            { reqSessionUuid: null, userSessionUuid: null }
        );

        const axiosResponse = handlerRequestException(conflict);
        expect(axiosResponse)
            .toEqual('');

    });

});
