import { StringOptionalType } from '../common/genericTypes';
import RequiredAttributes from '../../paramutils/requiredAttributes';

export class TaxInformation {

    tin: StringOptionalType;

    ein: StringOptionalType;

    constructor(
        tin: StringOptionalType,
        ein: StringOptionalType,
    ) {

        this.tin = RequiredAttributes.requireNonBlankOrElse(tin, null);
        this.ein = RequiredAttributes.requireNonBlankOrElse(ein, null);

        RequiredAttributes.requireArrayHavingAtLeastOneNonNull([
            tin,
            ein
        ], 'TaxInformation');

    }

}
