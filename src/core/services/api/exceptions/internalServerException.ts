import { BaseHttpException } from './baseHttpException';
import { IContextSession } from '../../../domain/session/sessionTypes';
import { StringOptionalType } from '../../../domain/common/genericTypes';

export class InternalServerException extends BaseHttpException {

  constructor(
    msg: string,
    session: IContextSession,
    details?: StringOptionalType,
    stack?: string,
  ) {

    super(msg, session, details, stack);

    Object.setPrototypeOf(this, InternalServerException.prototype);

  }

}
