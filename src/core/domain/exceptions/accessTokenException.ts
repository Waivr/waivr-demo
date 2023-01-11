import RequiredAttributes from '../../paramutils/requiredAttributes';

export class AccessTokenException extends Error {

    constructor(msg: string, stack?: string) {

        super(msg);
        this.stack = RequiredAttributes.requireNonNullOrElse(stack, this.stack);

        Object.setPrototypeOf(this, AccessTokenException.prototype);
    
    }

}
