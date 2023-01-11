import { BaseHttpException } from './baseHttpException';
import { IContextSession } from '../../../domain/session/sessionTypes';
import { StringOptionalType } from '../../../domain/common/genericTypes';

export class BadRequestException extends BaseHttpException {

  constructor(
    msg: string,
    session: IContextSession,
    details?: StringOptionalType,
    stack?: string,
  ) {

    super(msg, session, details, stack);

    Object.setPrototypeOf(this, BadRequestException.prototype);

  }

}
