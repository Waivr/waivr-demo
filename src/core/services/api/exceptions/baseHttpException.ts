import { IContextSession } from '../../../domain/session/sessionTypes';
import { StringOptionalType } from '../../../domain/common/genericTypes';
import RequiredAttributes from '../../../paramutils/requiredAttributes';

export class BaseHttpException extends Error {

  session: IContextSession;

  details: string;

  constructor(
    msg: string,
    session: IContextSession,
    details?: StringOptionalType,
    stack?: string,
  ) {

    super(msg);

    this.session = session;
    this.details = RequiredAttributes.requireNonNullOrElse(details, '');
    this.stack = RequiredAttributes.requireNonNullOrElse(stack, this.stack);

    Object.setPrototypeOf(this, BaseHttpException.prototype);

  }

}
