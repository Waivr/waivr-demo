import RequiredAttributes from '../../paramutils/requiredAttributes';

export class InvalidException extends Error {

    constructor(msg: string, stack?: string) {

        super(msg);
        this.stack = RequiredAttributes.requireNonNullOrElse(stack, this.stack);

        Object.setPrototypeOf(this, InvalidException.prototype);
    
    }

}
