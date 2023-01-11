import RequiredAttributes from '../../paramutils/requiredAttributes';
import alphaNumericNamePattern from '../common/text/alphaNumericNamePattern';

export class LegalName {

    value: string;


    constructor(value: string) {

        this.value = RequiredAttributes.requireNonBlank(value, 'Legal name');
        alphaNumericNamePattern(value, 'Legal name');

    }


}
